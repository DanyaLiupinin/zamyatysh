"use strict";
const { sanitize } = require("@strapi/utils");

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::category.category", ({ strapi }) => ({

    async findOne(ctx) {


      try {
        const entry = await strapi.db.query('api::category.category').findOne({
          where: { slug: ctx.params.id, ...ctx.query },
          //populate: {}
        });
        ctx.body = entry

      } catch (err) {
        ctx.body = err
      }
    }
  })
);
