import { ContentfulStatusCode } from "hono/utils/http-status";
import HttpException from "./HttpException.ts";

export default class BadRequestHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 400, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        super.setMessage(message);
        this.name = "BadRequestHttpException";
    }
}