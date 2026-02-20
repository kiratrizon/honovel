import { Route } from "Illuminate/Support/Facades/index.ts";
import User from "App/Models/User.ts";

Route.get("/", async ({ request }) => {
  return response().json({ message: "API is working!" });
});

Route.post("/", async ({ request }) => {
  const users = await User.with("admins").get();
  return response().json(users);
});
