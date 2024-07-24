import { initHttpServer, initWebSocketServer } from "./server/index.js";
import { HTTP_SERVER_PORT, WEBSOCKET_SERVER_PORT } from "./config.js";

initHttpServer(HTTP_SERVER_PORT);
initWebSocketServer(WEBSOCKET_SERVER_PORT);
