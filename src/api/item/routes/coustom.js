module.exports = {
  routes: [
    {
      method: "GET",
      path: "/items/section/:id",
      handler: "item.getItemsBySection",
      config: {
        auth: false,
      },
    },
  ],
};
