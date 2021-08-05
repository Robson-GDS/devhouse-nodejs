const { Router } = require('express')

const routes = new Router();

routes.get('/', (request, response) => {
  return response.json({ ok: true })
});

module.exports = routes;