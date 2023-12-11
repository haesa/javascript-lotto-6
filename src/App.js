import InputView from './View/InputView';
import Lotto from './Domain/Lotto';
import LottoPrize from './Domain/LottoPrize';
import LottoProfit from './Domain/LottoProfit';
import LottoShop from './Domain/LottoShop';
import OutputView from './View/OutputView';
import repeatAsyncFunction from './repeat';

class App {
  #lotto;
  #bonus;

  async play() {
    const buyingPrice = await this.#readBuyingPrice();
    const lottoTickets = LottoShop.issueLottoTickets(buyingPrice);
    OutputView.printLottoTickets(lottoTickets);

    this.#lotto = await this.#readWinningNumbers();
    this.#bonus = await this.#readBonusNumber();

    const matchResult = this.#matchLottoTickets(lottoTickets);
    const lottoPrizes = LottoPrize.determinePrizeTier(matchResult);
    OutputView.printLottoResult(lottoPrizes);

    const lottoYield = LottoProfit.calculateYield(lottoPrizes, buyingPrice);
    OutputView.printLottoYield(lottoYield);
  }

  async #readBuyingPrice() {
    const readBuyingPrice = async () => await InputView.readBuyingPrice();
    return await repeatAsyncFunction(readBuyingPrice);
  }

  async #readWinningNumbers() {
    const readWinningNumbers = async () => {
      const winningNumbers = await InputView.readWinningNumbers();
      return await new Lotto(winningNumbers);
    };
    return await repeatAsyncFunction(readWinningNumbers);
  }

  async #readBonusNumber() {
    const readBonusNumber = async () => {
      const bonus = await InputView.readBonusNumber();
      this.#lotto.validateBonus(bonus);
      return bonus;
    };
    return await repeatAsyncFunction(readBonusNumber);
  }

  #matchLottoTickets(lottoTickets) {
    return lottoTickets.map((lottoTicket) => ({
      matchCount: this.#lotto.matchCount(lottoTicket),
      hasBonus: lottoTicket.includes(this.#bonus),
    }));
  }
}

export default App;
