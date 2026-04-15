const { Gacha } = require('../../../models');

async function create(data) {
  return Gacha.create(data);
}

async function countTodayByUser(userId, start, end) {
  return Gacha.countDocuments({
    userId,
    createdAt: {
      $gte: start,
      $lte: end,
    },
  });
}

async function findByUser(userId) {
  return Gacha.find({ userId })
    .populate('userId', 'name')
    .populate('prizeId', 'name');
}

async function findAll() {
  return Gacha.find().populate('userId', 'name').populate('prizeId', 'name');
}

async function findWinners() {
  return Gacha.find({ isWin: true })
    .populate('userId', 'name')
    .populate('prizeId', 'name');
}

module.exports = {
  create,
  countTodayByUser,
  findByUser,
  findAll,
  findWinners,
};
