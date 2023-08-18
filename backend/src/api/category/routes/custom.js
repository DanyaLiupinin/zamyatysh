module.exports = {
  routes: [
    {
      "method": "GET",
      "path": "/categories/:slug",
      "handler": "category.findOne",
      "config": {
        "auth": false
      }
    },
  ],
};
