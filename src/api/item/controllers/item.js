"use strict";

/**
 * item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::item.item");

module.exports = createCoreController("api::item.item", ({ strapi }) => ({
  async getItemsBySection(ctx) {
    try {
      const items = await strapi.db.query("api::item.item").findMany({
        where: {
          sessionId: ctx.params.id,
        },
      });
      console.log(items);

      return items;
    } catch (error) {}
  },
}));
