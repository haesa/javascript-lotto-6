const PRIZE = {
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  fourth: 50_000,
  fifth: 5_000,
};

const TIER = {
  6: 'first',
  5: (hasBonus) => (hasBonus ? 'second' : 'third'),
  4: 'fourth',
  3: 'fifth',
};

const WINNING = {
  matchCount: 3,
  bonusMatchCount: 5,
};

export { PRIZE, TIER, WINNING };
