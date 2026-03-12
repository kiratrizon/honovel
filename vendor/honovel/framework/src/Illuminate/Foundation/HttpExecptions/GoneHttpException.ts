import HttpException from "./HttpException.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";
export default class GoneHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 410, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "GoneHttpException";
    }
}