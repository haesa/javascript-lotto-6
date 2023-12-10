class LottoProfit {
  static PRIZE = {
    first: 2_000_000_000,
    second: 30_000_000,
    third: 1_500_000,
    fourth: 50_000,
    fifth: 5_000,
  };

  static calculateProfit(lottoResult) {
    return lottoResult.reduce(
      (profit, prize) => profit + LottoProfit.PRIZE[prize],
      0
    );
  }

  static calculateYield(lottoResult, buyingPrice) {
    const profit = LottoProfit.calculateProfit(lottoResult);
    return ((profit / buyingPrice) * 100).toFixed(1);
  }
}

export default LottoProfit;
