import { DatabaseConfig } from "configs/@types/index.d.ts";

const constant: DatabaseConfig = {
  default: env("DB_CONNECTION", "sqlite"),

  connections: {
    mysql: {
      driver: "mysql",
      host: env("DB_HOST", "127.0.0.1"),
      port: env("DB_PORT", 3306),
      user: env("DB_USERNAME", "root"),
      password: env("DB_PASSWORD", ""),
      database: env("DB_DATABASE", "honovel"),
      charset: "utf8mb4",
      options: {
        maxConnection: 4,
        dateStrings: true,
      },
    },
    sqlite: {
      driver: "sqlite",
      database: databasePath("database.sqlite"),
    },
    sqlsrv: {
      driver: "sqlsrv",
      host: env("MSSQL_HOST", "127.0.0.1"),
      port: env("MSSQL_PORT", 1433),
      user: env("MSSQL_USERNAME", "sa"),
      password: env("MSSQL_PASSWORD", ""),
      database: env("MSSQL_DATABASE", "honovel"),
      options: {
        // Local SQL Server images ship a self-signed certificate, so the
        // handshake fails unless the client is told to accept it.
        encrypt: env("MSSQL_ENCRYPT", false),
        trustServerCertificate: env("MSSQL_TRUST_CERT", true),
      },
    },
  },

  redis: {
    default: "cache", // use cache in connections
    connections: {
      cache: {
        driver: "upstash",
        upstashUrl: env("UPSTASH_REDIS_REST_URL", ""),
        upstashToken: env("UPSTASH_REDIS_REST_TOKEN", ""),
      },
      session: {
        driver: "ioredis",
        ioredisUrl: env("REDIS_URL", ""),
      },
    },
  },
};

export default constant;
