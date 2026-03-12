import Exception from "./Exception.ts";
import IHttpHono from "../../../../../@types/declaration/HttpHono.d.ts";
import { HonoResponse } from "HonoHttp/HonoResponse.ts";
import HttpException from "../HttpExecptions/HttpException.ts";
import Application from "../Application.ts";
export type IExceptionCallback = (httpObj: IHttpHono) => Promise<HonoResponse>;
export default class Exceptions {

    public static render(exception: (typeof HttpException | typeof Exception), cb: IExceptionCallback) {
        const newApp = new Application();
        newApp.addException(exception, cb);
    }
}