import Lotto from '../src/Domain/Lotto';

describe('로또 클래스 테스트', () => {
  test('당첨 번호랑 일치하는 로또 번호 개수 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const count = lotto.matchCount([1, 4, 5, 7, 10, 23]);
    expect(count).toBe(3);
  });

  test('당첨 번호에 보너스 번호가 포함되는지 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.containsBonus(1)).toBe(true);
    expect(lotto.containsBonus(23)).toBe(false);
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
});
