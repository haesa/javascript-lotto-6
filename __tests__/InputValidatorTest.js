import InputValidator from '../src/Validator/InputValidator';

describe('InputValidator 테스트', () => {
  test('구입 금액 입력 예외 테스트', () => {
    expect(() => InputValidator.buyingPrice('abc')).toThrow(
      '[ERROR] 숫자를 입력하세요.'
    );

    expect(() => InputValidator.buyingPrice('1004')).toThrow(
      '[ERROR] 1000 단위로 입력하세요.'
    );
  });

  test('당첨 번호 입력 예외 테스트', () => {
    expect(() => InputValidator.winningNumbers('abc')).toThrow(
      '[ERROR] 숫자를 입력하세요.'
    );
  });
});
