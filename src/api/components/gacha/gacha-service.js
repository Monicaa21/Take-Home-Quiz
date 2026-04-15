const usersRepository = require('../users/users-repository');
const gachaRepository = require('./gacha-repository');
const prizesRepository = require('../prizes/prizes-repository');

async function roll(name) {
  const user = await usersRepository.getUserByName(name);

  if (!user) {
    throw new Error('User not found :(');
  }

  // eslint-disable-next-line no-underscore-dangle
  const userId = user._id;

  const now = new Date();

  const start = new Date(now);
  start.setHours(0, 0, 0, 0);

  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  const totalToday = await gachaRepository.countTodayByUser(userId, start, end);

  if (totalToday >= 5) {
    throw new Error('Batas gacha harian sudah habis (5x)');
  }

  const prizes = await prizesRepository.findAvailable();

  let selectedPrize = null;
  let isWin = false;

  if (prizes.length > 0) {
    const random = Math.random() * 100;
    let cumulative = 0;

    for (let i = 0; i < prizes.length; i += 1) {
      const prize = prizes[i];
      cumulative += prize.probability;
      if (random <= cumulative) {
        selectedPrize = prize;
        isWin = true;

        // eslint-disable-next-line no-underscore-dangle
        prizesRepository.updateClaimed(prize._id);
        break;
      }
    }
  }

  const result = await gachaRepository.create({
    userId,
    // eslint-disable-next-line no-underscore-dangle
    prizeId: selectedPrize ? selectedPrize._id : null,
    isWin,
  });

  return {
    message: isWin
      ? 'Selamat, kamu mendapatkan hadiah!'
      : 'Yah belum dapat, coba lagi',
    prize: selectedPrize ? selectedPrize.name : null,
    data: result,
  };
}

async function getHistory(name) {
  const user = await usersRepository.getUserByName(name);

  if (!user) throw new Error('USER_NOT_FOUND');

  // eslint-disable-next-line no-underscore-dangle
  return gachaRepository.findByUser(user._id);
}

async function getWinners() {
  return gachaRepository.findWinners();
}

module.exports = {
  roll,
  getHistory,
  getWinners,
};
