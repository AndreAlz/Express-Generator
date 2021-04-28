import * as express from "express";
import { Application } from "express";
import * as cron from "node-cron";
import * as cors from "cors";

class App {
  public app: Application;
  public port: number;

  constructor(appInit: {
    port: number;
    middleWares: any;
    controllers: any;
    jobs: any;
  }) {
    this.app = express();
    this.port = appInit.port;
    this.app.use(cors());
    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.assets();
    this.template();
    this.jobs(appInit.jobs);
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: {
    forEach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private assets() {
    this.app.use(express.static("public"));
    this.app.use(express.static("views"));
  }

  private template() {
    this.app.set("view engine", "pug");
  }

  private jobs(jobs: { forEach: (arg0: (jobs: any) => void) => void }) {
    jobs.forEach((job) => {
      cron.schedule(job.time, async function () {
        await job.method();
      });
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;
