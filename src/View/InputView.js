import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readBuyingPrice() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    InputValidator.buyingPrice(input);
    return Number(input);
  },
};

export default InputView;
