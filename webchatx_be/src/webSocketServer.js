import { WebSocketServer } from "ws";
import { WEBSOCKET_SERVER_PORT } from "./config/index.js";

let wss = null;

const initWebSocketServer = () => {
  wss = new WebSocketServer({ port: WEBSOCKET_SERVER_PORT });
  console.log(`WebSocket服务已启动: ws://127.0.0.1:${WEBSOCKET_SERVER_PORT}`);
  webSocketHandler();
};

const webSocketHandler = () => {
  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      console.log("ws message: ", message);
    });

    ws.on("close", () => {
      console.log("收到客户端连接关闭");
    });

    ws.on("error", (error) => {
      console.error("ws error: ", error);
    });
  });
};

export { initWebSocketServer };
