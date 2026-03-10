import Application from "Illuminate/Foundation/Application.ts";

export default Application.withRouting({
  web: async () => await import("../routes/web.ts"),
  // api: async () => await import("../routes/api.ts"),
}).withMiddleware((middleware)=>{
  
}).create();
