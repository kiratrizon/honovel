import { ContentfulStatusCode } from "hono/utils/http-status";

export default class Exception extends Error {
    public httpCode: ContentfulStatusCode = 500;

    constructor(message: string = "An exception occurred", httpCode: ContentfulStatusCode = 500) {
        super(message);
        this.name = "Exception";
        this.httpCode = httpCode;
    }
}