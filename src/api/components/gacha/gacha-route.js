const express = require('express');

const gachaController = require('./gacha-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/gacha', route);

  route.post('/roll', gachaController.doGacha);
  route.get('/history/:name', gachaController.getHistory);
  route.get('/winners', gachaController.getWinners);
};
