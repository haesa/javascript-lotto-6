class LottoPrize {
  static PRIZE = {
    6: 'first',
    5: (hasBonus) => (hasBonus ? 'second' : 'third'),
    4: 'fourth',
    3: 'fifth',
  };

  static #checkWinningLotto(matchResult) {
    return matchResult.filter(({ matchCount }) => matchCount >= 3);
  }

  static determinePrizeTier(matchResult) {
    const winningLottos = LottoPrize.#checkWinningLotto(matchResult);
    return winningLottos.map(({ matchCount, hasBonus }) =>
      matchCount === 5
        ? LottoPrize.PRIZE[matchCount](hasBonus)
        : LottoPrize.PRIZE[matchCount]
    );
  }
}

export default LottoPrize;
