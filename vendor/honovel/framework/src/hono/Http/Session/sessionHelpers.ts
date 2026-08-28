import { MiddlewareHandler } from "hono";
import SessionManager from "Illuminate/Session/SessionManager.ts";

/**
 * Allocate the session for this request and publish it on the context.
 *
 * Deliberately thin: it does no I/O. Loading, cookies, garbage collection and
 * persistence belong to StartSession, which runs in the "web" group only - so
 * route groups without it never pay for session storage they don't use.
 *
 * What this does guarantee is that request.session always resolves to
 * something on every group, which the auth guards rely on. StartSession swaps
 * this Store for a started one through request.setSession().
 */
export function honoSession(): MiddlewareHandler {
  return async (c: MyContext, next: () => Promise<void>) => {
    const store = new SessionManager().driver();

    c.set("_sessionStore", store);
    c.set("session", store);

    await next();
  };
}

export function sessionIdRecursive(): string {
  const timestamp = date("YmdHis");

  const array = crypto.getRandomValues(new Uint8Array(16));
  const randomPart = Array.from(array)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return `${timestamp}${randomPart}`;
}
