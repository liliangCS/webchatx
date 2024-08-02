import Cuka from "cuka";
import { HTTP_SERVER_PORT } from "./config/index.js";
import userController from "./controllers/userController.js";

let httpServer = null;

const initHttpServer = () => {
  httpServer = new Cuka();
  httpServer.listen(HTTP_SERVER_PORT, () => {
    console.log(`http服务已启动: http://127.0.0.1:${HTTP_SERVER_PORT}`);
  });

  httpServer.setHeader("Access-Control-Allow-Origin", "*");
  httpServer.setHeader("Access-Control-Allow-Methods", "*");
  httpServer.setHeader("Access-Control-Allow-Headers", "*");
  userController(httpServer);
};

export { initHttpServer };
