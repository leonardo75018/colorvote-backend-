module.exports = {
  routes: [
    {
      method: "GET",
      path: "/participants/session/:id",
      handler: "participant.getParticipantById",
      config: {
        auth: false,
      },
    },
  ],
};
