const express = require('express');

const prizesController = require('./prizes-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/prizes', route);

  route.get('/', prizesController.getAllPrizes);

  route.get('/remaining', prizesController.getRemainingKuota);
};
