import LottoPrize from '../src/Domain/LottoPrize';

describe('LottoPrize 클래스 테스트', () => {
  test('당첨된 로또의 등수를 구하는 테스트', () => {
    const lottoPrize = LottoPrize.determinePrizeTier([
      { matchCount: 5, hasBonus: true },
      { matchCount: 3, hasBonus: false },
    ]);
    expect(lottoPrize).toEqual(['second', 'fifth']);
  });
});
