import { Route } from "Illuminate/Support/Facades/index.ts";

Route.view("/", "welcome");

Route.get("/test", async ({ request }) => {})
