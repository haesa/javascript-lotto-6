const InputValidator = {
  buyingPrice(input) {
    if (!/^[0-9]+$/.test(input)) {
      throw new Error('[ERROR] 숫자를 입력하세요.');
    }

    if (Number(input) % 1000 !== 0) {
      throw new Error('[ERROR] 1000 단위로 입력하세요.');
    }
  },

  winningNumbers(input) {
    if (!/^[0-9]+$/.test(input)) {
      throw new Error('[ERROR] 숫자를 입력하세요.');
    }
  },

  bonusNumber(input) {
    if (!/^[0-9]+$/.test(input)) {
      throw new Error('[ERROR] 숫자를 입력하세요.');
    }

    if (Number(input) < 1 || Number(input) > 45) {
      throw new Error('[ERROR] 1 이상 45 이하의 숫자를 입력하세요.');
    }
  },
};
export default InputValidator;
