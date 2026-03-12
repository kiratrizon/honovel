import { ContentfulStatusCode } from "hono/utils/http-status";
import HttpException from "./HttpException.ts";
export default class ConflictHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 409, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "ConflictHttpException";
    }
}