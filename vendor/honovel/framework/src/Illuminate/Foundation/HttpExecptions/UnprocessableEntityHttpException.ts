import HttpException from "./HttpException.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";
export default class UnprocessableEntityHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 422, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "UnprocessableEntityHttpException";
    }
}