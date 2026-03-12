import HttpException from "./HttpException.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";
export default class TooManyRequestsHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 429, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "TooManyRequestsHttpException";
    }
}