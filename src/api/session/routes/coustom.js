module.exports = {
  routes: [
    {
      method: "GET",
      path: "/sessions/coming",
      handler: "session.findComing",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/sessions/end",
      handler: "session.findFinish",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/session/pin/:id",
      handler: "session.getSessionByPin",
      config: {
        auth: false,
      },
    },
  ],
};
