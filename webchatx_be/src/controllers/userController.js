const userController = (httpServer) => {
  httpServer.on("/user/login", "post", (ctx) => {
    ctx.end("/user/login");
  });
  httpServer.on("/user/register", "post", (ctx) => {
    ctx.end("/user/register");
  });
};

export default userController;
