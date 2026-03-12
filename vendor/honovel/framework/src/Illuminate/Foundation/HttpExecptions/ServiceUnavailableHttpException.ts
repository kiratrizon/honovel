import HttpException from "./HttpException.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";
export default class ServiceUnavailableHttpException extends HttpException {
    constructor(message: string, httpCode: ContentfulStatusCode = 503, headers: Record<string, string> = {}) {
        super(message, httpCode, headers);
        this.name = "ServiceUnavailableHttpException";
    }
}   