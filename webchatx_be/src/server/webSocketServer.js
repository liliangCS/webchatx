import { WebSocketServer } from "ws";

const initWebSocketServer = (port) => {
  const wss = new WebSocketServer({ port });

  console.log(`websocket服务启动成功: 127.0.0.1:${port}`);

  wss.on("connection", function connection(ws) {
    ws.on("error", console.error);

    ws.on("message", function message(data) {
      console.log("received: %s", data);
    });

    ws.send("something");
  });
};

export { initWebSocketServer };
