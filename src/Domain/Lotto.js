class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
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

  containsBonus(bonus) {
    return this.#numbers.includes(bonus);
  }
}

export default Lotto;
