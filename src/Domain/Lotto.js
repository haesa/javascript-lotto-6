import { ERROR, VALIDATOR } from '../constants';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (VALIDATOR.lottoNumbersLength(numbers)) {
      throw new Error(ERROR.lottoNumbersLength);
    }

    if (VALIDATOR.lottoNumberRange(numbers)) {
      throw new Error(ERROR.lottoNumberRange);
    }

    if (VALIDATOR.lottoNumbersUnique(numbers)) {
      throw new Error(ERROR.lottoNumbersUnique);
    }
  }

  #contains(number) {
    return this.#numbers.includes(number);
  }

  matchCount(lottoTicket) {
    return lottoTicket.reduce(
      (result, number) => (this.#contains(number) ? result + 1 : result),
      0
    );
  }

  validateBonus(bonus) {
    if (this.#numbers.includes(bonus)) {
      throw new Error(ERROR.bonusNumberExcluded);
    }
  }
}

export default Lotto;
