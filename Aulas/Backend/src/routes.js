const express = require('express');

const routes = express();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

module.exports = routes;
