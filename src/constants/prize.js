const PRIZE = Object.freeze({
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  fourth: 50_000,
  fifth: 5_000,
});

const TIER = Object.freeze({
  6: 'first',
  5: (hasBonus) => (hasBonus ? 'second' : 'third'),
  4: 'fourth',
  3: 'fifth',
});

const WINNING = Object.freeze({
  matchCount: 3,
  bonusMatchCount: 5,
});

export { PRIZE, TIER, WINNING };
