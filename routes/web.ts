import { Route } from "Illuminate/Support/Facades/index.ts";
import NotFoundHttpException from "Illuminate/Foundation/HttpExecptions/NotFoundHttpException.ts";
import AccessDeniedHttpException from "Illuminate/Foundation/HttpExecptions/AccessDeniedHttpException.ts";

Route.view("/", "welcome");

Route.get("/test", async ({ request }) => {
    throw new NotFoundHttpException();
})

Route.get("/test2", async ({ request }) => {
    throw new AccessDeniedHttpException();
})