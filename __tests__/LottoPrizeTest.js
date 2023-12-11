import LottoPrize from '../src/Domain/LottoPrize';

describe('LottoPrize 테스트', () => {
  test('당첨된 로또의 등수를 구하는 테스트', () => {
    const lottoPrize = LottoPrize.determinePrizeTier([
      { matchCount: 5, hasBonus: true },
      { matchCount: 5, hasBonus: false },
      { matchCount: 3, hasBonus: false },
    ]);
    expect(lottoPrize).toEqual(['second', 'third', 'fifth']);
  });
});
