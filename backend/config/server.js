module.exports = ({ env }) => ({
  proxy: true,
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('HOST_URL'),
  app: {
    keys: env.array('APP_KEYS')
  },
});
