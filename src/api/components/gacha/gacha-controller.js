const gachaService = require('./gacha-service');

async function doGacha(request, response, next) {
  try {
    const userId = request.user.id;

    const result = await gachaService.doGacha(userId);

    return response.status(200).json(result);
  } catch (error) {
    if (error.message === 'DAILY_LIMIT_EXCEEDED') {
      return response.status(429).json({
        message: 'Anda mencapai batas maksimal gacha hari ini (5x).',
      });
    }
    return next(error);
  }
}

async function getHistory(request, response, next) {
  try {
    const userId = request.user.id;

    const history = await gachaService.getHistory(userId);

    return response.status(200).json(history);
  } catch (error) {
    return next(error);
  }
}

async function getWinners(request, response, next) {
  try {
    const data = await gachaService.getWinners();

    return response.status(200).json(data);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  doGacha,
  getHistory,
  getWinners,
};
