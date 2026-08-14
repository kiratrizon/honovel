import type { Pool, PoolClient } from "@db/pgsql";
import { QueryResultDerived } from "Database";

class PgSQL {
  /**
   * @param source A Pool, or an already-checked-out PoolClient. During a
   *   transaction the caller pins one client and passes it straight through —
   *   acquiring a fresh one per query would scatter BEGIN/COMMIT across
   *   connections. Only a client we acquired here gets released here.
   */
  public static async query<T extends keyof QueryResultDerived>(
    source: Pool | PoolClient,
    query: string,
    params: unknown[] = [],
  ): Promise<QueryResultDerived[T]> {
    const cleanedQuery = query.trim().toLowerCase();
    const queryType = cleanedQuery.startsWith("with")
      ? "select"
      : cleanedQuery.split(/\s+/)[0];

    // A Pool has connect(); a checked-out PoolClient does not.
    // deno-lint-ignore no-explicit-any
    const isPool = isFunction((source as any).connect);
    const client = isPool
      ? await (source as Pool).connect()
      : (source as PoolClient);
    try {
      // DQL: Data Queries (SELECT, SHOW, PRAGMA)
      if (["select", "show", "pragma"].includes(queryType)) {
        const result = await client.queryObject(query, params);
        return (result.rows as QueryResultDerived[T]) || [];
      }

      // DML: Data Manipulation (INSERT, UPDATE, DELETE)
      if (["insert", "update", "delete"].includes(queryType)) {
        // Check if query has RETURNING clause for INSERT
        const hasReturning = cleanedQuery.includes("returning");

        if (hasReturning) {
          const result = await client.queryObject(query, params);
          const firstRow = result.rows[0] as
            | Record<string, unknown>
            | undefined;
          const lastInsertRowId =
            queryType === "insert" && firstRow && "id" in firstRow
              ? Number(firstRow.id)
              : null;
          return {
            affected: result.rowCount ?? 0,
            lastInsertRowId,
            raw: result,
          } as QueryResultDerived[T];
        } else {
          const result = await client.queryArray(query, params);
          return {
            affected: result.rowCount ?? 0,
            lastInsertRowId: null,
            raw: result,
          } as QueryResultDerived[T];
        }
      }

      // DDL: Data Definition (CREATE, ALTER, DROP, TRUNCATE, RENAME)
      if (
        ["create", "alter", "drop", "truncate", "rename"].includes(queryType)
      ) {
        const result = await client.queryArray(query, params);
        return {
          message: "Executed",
          affected: result.rowCount ?? 0,
          raw: result,
        } as QueryResultDerived[T];
      }

      // TCL: Transaction Control (BEGIN, COMMIT, ROLLBACK, SAVEPOINT)
      if (
        [
          "begin",
          "start",
          "commit",
          "rollback",
          "savepoint",
          "release",
        ].includes(queryType)
      ) {
        const result = await client.queryArray(query, params);
        return {
          message: `${queryType.toUpperCase()} executed`,
          raw: result,
        } as QueryResultDerived[T];
      }

      // Default: Generic execution
      const result = await client.queryArray(query, params);
      return {
        message: "Query executed",
        affected: result.rowCount ?? 0,
        raw: result,
      } as QueryResultDerived[T];
    } catch (e: unknown) {
      const error = e instanceof Error ? e : new Error(String(e));
      throw error;
    } finally {
      // Only release what this call acquired; a pinned client belongs to the
      // transaction and is released when the transaction ends.
      if (isPool) {
        client.release();
      }
    }
  }
}

export default PgSQL;
