import Middleware from "./Configuration/Middleware.ts";

type RouterLoader = () => Promise<any>;

export interface RoutingConfig {
  web?: RouterLoader;
  api?: RouterLoader;
  commands?: RouterLoader;
  health?: string;
}

export default class Application {
  private static base: string;
  private static middleware: typeof Middleware = Middleware;

  private static routers: RoutingConfig = {};

  static withMiddleware(cb: (middleware: typeof Middleware) => void) {
    const mw = this.middleware;
    cb(mw);
    return this;
  }

  static withRouting(obj: RoutingConfig) {
    for (const [key, value] of Object.entries(obj)) {
      this.routers[key as keyof RoutingConfig] = value;
    }
    return this;
  }

  static create(){
    const app = new this();
    return app;
  }

  public getRouter() {
    const data = {
      middleware: new Application.middleware(),
      routers: Application.routers,
      base: Application.base,
    }
    return data;
  }
}
