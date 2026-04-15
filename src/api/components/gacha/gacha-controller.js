const gachaService = require('./gacha-service');

async function doGacha(request, response, next) {
  try {
    const { name } = request.body;

    const result = await gachaService.roll(name);

    return response.status(200).json(result);
  } catch (error) {
    if (error.message === 'User not found :(') {
      return response.status(404).json({
        message: 'Maaf, nama belum terdaftar',
      });
    }
    if (error.message === 'Batas gacha harian sudah habis (5x)') {
      return response.status(429).json({
        message: 'Anda mencapai batas maksimal gacha hari ini (5x).',
      });
    }
    return next(error);
  }
}

async function getHistory(request, response, next) {
  try {
    const { name } = request.body;

    const history = await gachaService.getHistory(name);

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
