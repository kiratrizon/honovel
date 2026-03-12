import HttpException from "./HttpException.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";
export default class PreconditionRequiredHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 428, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "PreconditionRequiredHttpException";
    }   
}