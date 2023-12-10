import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../Validator/InputValidator';

const InputView = {
  async readBuyingPrice() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    InputValidator.buyingPrice(input);
    return Number(input);
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    InputValidator.winningNumbers(input);
    return [...input].map(Number);
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    InputValidator.bonusNumber(input);
    return Number(input);
  },
};

export default InputView;
