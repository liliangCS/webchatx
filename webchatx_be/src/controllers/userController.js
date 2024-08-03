import { queryUserByUsername } from "../database/user.js";

const userController = (httpServer) => {
  httpServer.on("/user/login", "post", (ctx) => {
    const { username, password } = JSON.parse(ctx.request.body);
    queryUserByUsername(username);
    ctx.end("/user/login");
  });
  httpServer.on("/user/register", "post", (ctx) => {
    ctx.end("/user/register");
  });
};

export default userController;
