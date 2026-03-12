import HttpException from "./HttpException.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";
export default class PreconditionFailedHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 412, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "PreconditionFailedHttpException";
    }
}