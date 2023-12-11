import { ERROR, VALIDATOR } from '../constants';

const InputValidator = {
  buyingPrice(input) {
    if (VALIDATOR.notNumber(input)) {
      throw new Error(ERROR.number);
    }

    if (VALIDATOR.buyingPriceUnit(input)) {
      throw new Error(ERROR.buyingPriceUnit);
    }
  },

  winningNumbers(inputArray) {
    if (inputArray.some(VALIDATOR.notNumber)) {
      throw new Error(ERROR.number);
    }
  },

  bonusNumber(input) {
    if (VALIDATOR.notNumber(input)) {
      throw new Error(ERROR.number);
    }

    if (VALIDATOR.bonusNumberRange(input)) {
      throw new Error(ERROR.lottoNumberRange);
    }
  },
};

export default InputValidator;
