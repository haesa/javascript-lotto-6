import { ERROR } from '../src/constants';
import Lotto from '../src/Domain/Lotto';

describe('로또 클래스 테스트', () => {
  test('당첨 번호랑 일치하는 로또 번호 개수 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const count = lotto.matchCount([1, 4, 5, 7, 10, 23]);
    expect(count).toBe(3);
  });

  describe('로또 번호 예외 테스트', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow(ERROR.lottoNumbersLength);
    });

    test('로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 50]);
      }).toThrow(ERROR.lottoNumberRange);
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow(ERROR.lottoNumbersUnique);
    });
  });

  describe('보너스 번호 예외 테스트', () => {
    test('보너스 번호가 당첨 번호와 중복이면 예외가 발생한다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(() => {
        lotto.validateBonus(5);
      }).toThrow(ERROR.bonusNumberExcluded);
    });
  });
});
