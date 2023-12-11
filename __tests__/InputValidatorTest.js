import { ERROR } from '../src/constants';
import InputValidator from '../src/Validator/InputValidator';

describe('InputValidator 테스트', () => {
  test('구입 금액 입력 예외 테스트', () => {
    expect(() => InputValidator.buyingPrice('abc')).toThrow(ERROR.number);

    expect(() => InputValidator.buyingPrice('1004')).toThrow(
      ERROR.buyingPriceUnit
    );
  });

  test('당첨 번호 입력 예외 테스트', () => {
    expect(() => InputValidator.winningNumbers(['a', 'b', 'c'])).toThrow(
      ERROR.number
    );
  });

  test('보너스 번호 입력 예외 테스트', () => {
    expect(() => InputValidator.bonusNumber('abc')).toThrow(ERROR.number);

    expect(() => InputValidator.bonusNumber('0')).toThrow(
      ERROR.lottoNumberRange
    );
  });
});
