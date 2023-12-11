import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants';

const LottoShop = {
  createLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.minNumber,
      LOTTO.maxNumber,
      LOTTO.length
    );
  },
  issueLottoTickets(buyingPrice) {
    const amount = buyingPrice / LOTTO.price;
    return Array.from({ length: amount }, LottoShop.createLottoNumber);
  },
};

export default LottoShop;
