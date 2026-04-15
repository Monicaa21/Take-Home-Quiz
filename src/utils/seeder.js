const { Prize } = require('../models');

async function seedPrizes() {
  await Prize.deleteMany();
  await Prize.insertMany([
    { name: 'Emas 10 gram', quota: 1, remaining: 1, probability: 0.1 },
    { name: 'Smartphone X', quota: 5, remaining: 5, probability: 0.5 },
    { name: 'Smartwatch Y', quota: 10, remaining: 10, probability: 1 },
    { name: 'Voucher Rp100.000', quota: 100, remaining: 100, probability: 5 },
    { name: 'Pulsa Rp50.000', quota: 500, remaining: 500, probability: 10 },
  ]);
  // eslint-disable-next-line no-console
  console.log('Prizes seeded!');
}

module.exports = seedPrizes;
