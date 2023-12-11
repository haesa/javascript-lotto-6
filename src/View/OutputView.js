import { Console } from '@woowacourse/mission-utils';
import sortLottoNumbers from '../sort';

const OutputView = {
  printLottoTickets(lottoTickets) {
    Console.print(`${lottoTickets.length}개를 구매했습니다.`);
    lottoTickets.forEach(sortLottoNumbers);
    lottoTickets.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
    OutputView.printNewLine();
  },

  printLottoResult(lottoPrizes) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(
      `3개 일치 (5,000원) - ${
        lottoPrizes.filter((prize) => prize === 'fifth').length
      }개`
    );
    Console.print(
      `4개 일치 (50,000원) - ${
        lottoPrizes.filter((prize) => prize === 'fourth').length
      }개`
    );
    Console.print(
      `5개 일치 (1,500,000원) - ${
        lottoPrizes.filter((prize) => prize === 'third').length
      }개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        lottoPrizes.filter((prize) => prize === 'second').length
      }개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${
        lottoPrizes.filter((prize) => prize === 'first').length
      }개`
    );
  },

  printLottoYield(lottoYield) {
    Console.print(`총 수익률은 ${lottoYield}%입니다.`);
  },

  printError(error) {
    Console.print(error.message);
  },

  printNewLine() {
    Console.print('');
  },
};

export default OutputView;
