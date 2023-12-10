class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 숫자 6개를 입력하세요.');
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 1 이상 45 이하의 숫자를 입력하세요.');
    }

    if (new Set(numbers).size < 6) {
      throw new Error('[ERROR] 숫자 중복 없이 입력하세요.');
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
      throw new Error('[ERROR] 당첨 번호에 없는 숫자를 입력하세요.');
    }
  }
}

export default Lotto;
