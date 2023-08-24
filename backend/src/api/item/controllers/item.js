'use strict';

/**
 * item controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::item.item', ({ strapi }) => ({

  async findOne(ctx) {

    try {
      
      const entry = await strapi.db.query('api::item.item').findOne({
        where: {
          slug: ctx.query.slug,
          locale: ctx.query.locale
        },
        populate: ctx.query.populate
      });

      ctx.body = entry

    } catch (err) {
      ctx.body = err
    }
  }
}));
