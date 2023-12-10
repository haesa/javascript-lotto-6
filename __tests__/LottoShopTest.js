import LottoShop from '../src/Domain/LottoShop';

describe('LottoShop 테스트', () => {
  test('로또 발행 테스트', () => {
    const lottos = LottoShop.issueLottoTickets(8000);
    expect(lottos.length).toBe(8);
  });
});
