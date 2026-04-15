const express = require('express');

const users = require('./components/users/users-route');
const gacha = require('./components/gacha/gacha-route');
const prizes = require('./components/prizes/prizes-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  gacha(app);
  prizes(app);

  return app;
};
