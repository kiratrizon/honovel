import { ContentfulStatusCode } from "hono/utils/http-status";
import HttpException from "./HttpException.ts";

export default class NotFoundHttpException extends HttpException {
    constructor(message: string = "Not Found", httpCode: ContentfulStatusCode = 404, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "NotFoundHttpException";
    }
}