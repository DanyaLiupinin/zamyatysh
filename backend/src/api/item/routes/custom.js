module.exports = {
  routes: [
    {
      "method": "GET",
      "path": "/items/:slug",
      "handler": "item.findOne",
      "config": {
        "auth": false
      }
    },
  ],
};
