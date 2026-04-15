const prizesRepository = require('./prizes-repository');

async function getAllPrizes() {
  return prizesRepository.findAll();
}

async function getAvailablePrizes() {
  return prizesRepository.findAvailable();
}

async function createPrize(data) {
  if (!data.name || !data.quota) {
    throw new Error('Name dan quota wajib diisi');
  }

  return prizesRepository.create({
    ...data,
    claimed: 0,
  });
}

async function getRemainingQuota() {
  const prizes = await prizesRepository.findAll();

  return prizes.map((p) => ({
    name: p.name,
    remaining: p.quota - p.claimed,
  }));
}

module.exports = {
  getAllPrizes,
  getAvailablePrizes,
  createPrize,
  getRemainingQuota,
};
