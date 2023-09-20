module.exports = ({ env }) => ({
  proxy: true,
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: 'https://zamyatysh-backend.onrender.com',
  app: {
    keys: env.array('APP_KEYS')
  },
});
