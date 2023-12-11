class LottoProfit {
  static PRIZE = {
    first: 2_000_000_000,
    second: 30_000_000,
    third: 1_500_000,
    fourth: 50_000,
    fifth: 5_000,
  };

  static #calculateProfit(lottoPrizes) {
    return lottoPrizes.reduce(
      (profit, prize) => profit + LottoProfit.PRIZE[prize],
      0
    );
  }

  static calculateYield(lottoPrizes, buyingPrice) {
    const profit = LottoProfit.#calculateProfit(lottoPrizes);
    return ((profit / buyingPrice) * 100).toFixed(1);
  }
}

export default LottoProfit;
