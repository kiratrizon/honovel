import { Route } from "Illuminate/Support/Facades/index.ts";
import NotFoundHttpException from "Illuminate/Foundation/HttpExecptions/NotFoundHttpException.ts";
import HttpException from "Illuminate/Foundation/HttpExecptions/HttpException.ts";
Route.view("/", "welcome");

Route.get("/test", async ({ request }) => {
    throw new NotFoundHttpException();
})