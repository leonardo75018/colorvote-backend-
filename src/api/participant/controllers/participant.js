"use strict";

/**
 * participant controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::participant.participant");

module.exports = createCoreController(
  "api::participant.participant",
  ({ strapi }) => ({
    async getParticipantById(ctx) {
      try {
        console.log("gg");
      } catch (error) {}
    },
  })
);
