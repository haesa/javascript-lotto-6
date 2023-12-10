import LottoProfit from '../src/Domain/LottoProfit';

describe('LottoProfit 테스트', () => {
  test('로또 수익 테스트', () => {
    const profit = LottoProfit.calculateProfit(['fifth', 'fourth']);
    expect(profit).toBe(55000);
  });

  test('로또 수익률 테스트', () => {
    const lottoYield = LottoProfit.calculateYield(
      ['fifth', 'fifth', 'fifth'],
      21000
    );
    expect(lottoYield).toBe('71.4');
  });
});
