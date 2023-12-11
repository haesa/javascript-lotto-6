import { PRIZE } from '../constants';

const LottoProfit = {
  calculateProfit(lottoPrizes) {
    return lottoPrizes.reduce((profit, prize) => profit + PRIZE[prize], 0);
  },

  calculateYield(lottoPrizes, buyingPrice) {
    const profit = LottoProfit.calculateProfit(lottoPrizes);
    return ((profit / buyingPrice) * 100).toFixed(1);
  },
};

export default LottoProfit;
