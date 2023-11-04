import LottoWinnerVerifier from '../src/LottoWinnerVerifier';

describe('LottoWinnerVerifier 클래스 테스트', () => {
  test('로또 당첨 결과 반환', () => {
    const verifier = new LottoWinnerVerifier([1, 2, 3, 4, 5, 6], 42);
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 42],
    ];
    const outcome = verifier.checkLottoOutcome(lottos);
    const result = {
      first: 1,
      second: 1,
      third: 0,
      fourth: 0,
      fifth: 0,
      ['no prize']: 0,
    };
    expect(outcome).toEqual(result);
  });

  test('로또 수익률 테스트', () => {
    const outcome = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
      ['no prize']: 0,
    };
    expect(LottoWinnerVerifier.calulateLottoPayoutRate(outcome, 8000)).toBe(
      62.5
    );
  });
});
