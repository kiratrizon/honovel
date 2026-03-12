import { ContentfulStatusCode } from "hono/utils/http-status";
import HttpException from "./HttpException.ts";

export default class AccessDeniedHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 403, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "AccessDeniedHttpException";
    }
}