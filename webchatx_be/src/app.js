import { initHttpServer } from "./httpServer.js";
import { initWebSocketServer } from "./webSocketServer.js";
import { initDBConnectPool } from "./database/index.js";

initDBConnectPool();
initHttpServer();
initWebSocketServer();
