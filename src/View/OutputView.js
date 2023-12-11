import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants';
import sortLottoNumbers from '../sort';

const OutputView = {
  printLottoTickets(lottoTickets) {
    Console.print(OUTPUT.purchaseMessage(lottoTickets));
    lottoTickets.forEach(sortLottoNumbers);
    lottoTickets.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
    OutputView.printNewLine();
  },

  printLottoResult(lottoPrizes) {
    Console.print(OUTPUT.winningStatistics);
    Console.print(OUTPUT.divider);
    Console.print(OUTPUT.fifthPrize(lottoPrizes));
    Console.print(OUTPUT.fourthPrize(lottoPrizes));
    Console.print(OUTPUT.thirdPrize(lottoPrizes));
    Console.print(OUTPUT.secondPrize(lottoPrizes));
    Console.print(OUTPUT.firstPrize(lottoPrizes));
  },

  printLottoYield(lottoYield) {
    Console.print(OUTPUT.lottoYield(lottoYield));
  },

  printError(error) {
    Console.print(error.message);
  },

  printNewLine() {
    Console.print('');
  },
};

export default OutputView;
