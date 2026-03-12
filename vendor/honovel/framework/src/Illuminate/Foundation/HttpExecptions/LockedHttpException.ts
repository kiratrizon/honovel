import HttpException from "./HttpException.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";
export default class LockedHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 423, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        super.setMessage(message);
        this.name = "LockedHttpException";
    }
}