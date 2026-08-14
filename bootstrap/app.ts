import Application from "Illuminate/Foundation/Application.ts";
import NotFoundHttpException from "Illuminate/Foundation/HttpExceptions/NotFoundHttpException.ts";

export default Application.withRouting({
  web: async () => await import("../routes/web.ts"),
  // api: async () => await import("../routes/api.ts"),
  // commands: async () => await import("../routes/console.ts")
})
  .withMiddleware((middleware) => {})
  .withExceptions((exceptions) => {
    exceptions.render<typeof NotFoundHttpException>(
      NotFoundHttpException,
      async ({ request }, e) => {
        console.log("hello");
        if (request.expectsJson() || request.ajax()) {
          return response().json({ message: "Not Found" }, 404);
        }
        return "Not Found";
      },
    );
  })
  .create();
