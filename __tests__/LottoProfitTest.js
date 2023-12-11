import LottoProfit from '../src/Domain/LottoProfit';

describe('LottoProfit 테스트', () => {
  test('로또 수익률 테스트', () => {
    const lottoYield = LottoProfit.calculateYield(
      ['fifth', 'fifth', 'fifth'],
      21000
    );
    expect(lottoYield).toBe('71.4');
  });
});
