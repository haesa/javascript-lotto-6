import { TIER, WINNING } from '../constants';

const LottoPrize = {
  checkWinningLotto(matchResult) {
    return matchResult.filter(
      ({ matchCount }) => matchCount >= WINNING.matchCount
    );
  },

  determinePrizeTier(matchResult) {
    const winningLottos = LottoPrize.checkWinningLotto(matchResult);
    return winningLottos.map(({ matchCount, hasBonus }) =>
      matchCount === WINNING.bonusMatchCount
        ? TIER[matchCount](hasBonus)
        : TIER[matchCount]
    );
  },
};

export default LottoPrize;
