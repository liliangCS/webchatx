import { WebSocketServer } from "ws";
import { SERVER_PORT } from "./config/index.js";

const wss = new WebSocketServer({ port });

console.log(`websocket服务启动成功: ws://127.0.0.1:${SERVER_PORT}`);

wss.on("connection", function connection(ws) {
  ws.on("message", (message) => {
    console.log("Received message from client:", message);
    ws.send("Hello Client!");
  });

  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
  });
});
