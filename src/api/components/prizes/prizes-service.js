const prizesRepository = require('./prizes-repository');

async function getAllPrizes() {
  return prizesRepository.findAll();
}

async function getAvailablePrizes() {
  return prizesRepository.findAvailable();
}

async function createPrize(data) {
  if (!data.name || typeof data.kuota !== 'number' || data.kuota <= 0) {
    throw new Error('Name dan kuota harus valid');
  }

  return prizesRepository.create({
    ...data,
    claimed: 0,
  });
}

async function getRemainingKuota() {
  const prizes = await prizesRepository.findAll();

  return prizes.map((p) => ({
    name: p.name,
    remaining: Math.max(0, p.kuota - p.claimed),
  }));
}

module.exports = {
  getAllPrizes,
  getAvailablePrizes,
  createPrize,
  getRemainingKuota,
};
