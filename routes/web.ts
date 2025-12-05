import { Route } from "Illuminate/Support/Facades/index.ts";

Route.view("/", "welcome");

Route.get("/hello/{any}", async (_, any) => {

    const {request} = _;

    consoledeno.debug(`Route param`, any)
    return "hello";
}).where("any", /.*/);