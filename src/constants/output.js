const OUTPUT = Object.freeze({
  purchaseMessage: (lottoTickets) => `${lottoTickets.length}개를 구매했습니다.`,
  winningStatistics: '당첨 통계',
  divider: '---',
  fifthPrize: (lottoPrizes) =>
    `3개 일치 (5,000원) - ${
      lottoPrizes.filter((prize) => prize === 'fifth').length
    }개`,
  fourthPrize: (lottoPrizes) =>
    `4개 일치 (50,000원) - ${
      lottoPrizes.filter((prize) => prize === 'fourth').length
    }개`,
  thirdPrize: (lottoPrizes) =>
    `5개 일치 (1,500,000원) - ${
      lottoPrizes.filter((prize) => prize === 'third').length
    }개`,
  secondPrize: (lottoPrizes) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
      lottoPrizes.filter((prize) => prize === 'second').length
    }개`,
  firstPrize: (lottoPrizes) =>
    `6개 일치 (2,000,000,000원) - ${
      lottoPrizes.filter((prize) => prize === 'first').length
    }개`,
  lottoYield: (lottoYield) => `총 수익률은 ${lottoYield}%입니다.`,
});

export default OUTPUT;
