"use strict";

/**
 * session controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::session.session", ({ strapi }) => ({
  async findComing(ctx) {
    try {
      const sessionComing = await strapi.db
        .query("api::session.session")
        .findMany({
          where: { status: "coming" },
        });

      return sessionComing;
    } catch (error) {}
  },

  async findFinish(ctx) {
    try {
      const sessionFinish = await strapi.db
        .query("api::session.session")
        .findMany({
          where: { status: "end" },
        });

      return sessionFinish;
    } catch (error) {}
  },

  async getSessionByPin(ctx) {
    try {
      const session = await strapi.db.query("api::session.session").findOne({
        where: { pin: ctx.params.id },
      });

      return session;
    } catch (error) {}
  },
}));
