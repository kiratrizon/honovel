import HttpException from "./HttpException.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";
export default class NotAcceptableHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 406, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "NotAcceptableHttpException";
    }
}   