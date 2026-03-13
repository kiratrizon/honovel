import { ContentfulStatusCode } from "hono/utils/http-status";

export default class Exception extends Error {
    public httpCode: ContentfulStatusCode = 500;
    public headers: Record<string, string> = {};
    constructor(message: string = "An exception occurred", httpCode: ContentfulStatusCode = 500, headers: Record<string, string> = {}) {
        super(message);
        this.name = "Exception";
        this.httpCode = httpCode;
        this.headers = headers;
    }
}