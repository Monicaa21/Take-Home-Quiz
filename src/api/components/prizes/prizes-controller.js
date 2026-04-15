const prizesService = require('./prizes-service');

async function getAllPrizes(request, response, next) {
  try {
    const prizes = await prizesService.getAllPrizes();
    return response.status(200).json(prizes);
  } catch (error) {
    return next(error);
  }
}

async function getAvailablePrizes(request, response, next) {
  try {
    const prizes = await prizesService.getAvailablePrizes();
    return response.status(200).json(prizes);
  } catch (error) {
    return next(error);
  }
}

async function createPrize(request, response, next) {
  try {
    const prizes = await prizesService.createPrize(request.body);
    return response.status(200).json(prizes);
  } catch (error) {
    return next(error);
  }
}

async function getRemainingKuota(request, response, next) {
  try {
    const prizes = await prizesService.getRemainingKuota();
    return response.status(200).json(prizes);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllPrizes,
  getAvailablePrizes,
  createPrize,
  getRemainingKuota,
};
