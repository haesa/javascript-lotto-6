import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants';
import InputValidator from '../Validator/InputValidator';

const InputView = {
  async readBuyingPrice() {
    const input = await Console.readLineAsync(INPUT.buyingPrice);
    InputValidator.buyingPrice(input);
    return Number(input);
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync(INPUT.winningNumbers);
    const inputArray = input.split(',').map((value) => value.trim());
    InputValidator.winningNumbers(inputArray);
    return [...inputArray].map(Number);
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync(INPUT.bonusNumber);
    InputValidator.bonusNumber(input);
    return Number(input);
  },
};

export default InputView;
