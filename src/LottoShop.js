import { Random } from '@woowacourse/mission-utils';

const LottoShop = {
  createLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },
  issueLottoTickets(buyingPrice) {
    const amount = buyingPrice / 1000;
    return Array.from({ length: amount }, LottoShop.createLottoNumber);
  },
};

export default LottoShop;
