import HttpException from "./HttpException.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";
export default class LengthRequiredHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 411, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "LengthRequiredHttpException";
    }
}