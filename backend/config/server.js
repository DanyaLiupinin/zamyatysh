module.exports = ({ env }) => {
  const isDevelop = env.bool('DEVELOP', false);
  let config = {
    host: env('HOST', '0.0.0.0'),
    port: 1337,
    proxy: true,
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    app: {
      keys: env.array('APP_KEYS'),
    },
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET'),
      },
    },
  };

  // Устанавливаем URL в зависимости от значения DEVELOP
  if (isDevelop === true) {
    config.url = 'https://zamyatysh-backend.railway.internal.app';
  } else {
    config.url = 'https://zamyatysh-backend.railway.internal.app';
  }

  return config;
};
