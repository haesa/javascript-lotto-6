import { LOTTO } from '../constants';

const VALIDATOR = {
  lottoNumbersLength: (numbers) => numbers.length !== LOTTO.length,
  lottoNumberRange: (numbers) =>
    numbers.some(
      (number) => number < LOTTO.minNumber || number > LOTTO.maxNumber
    ),
  lottoNumbersUnique: (numbers) => new Set(numbers).size < LOTTO.length,
  notNumber: (value) => !/^[0-9]+$/.test(value),
  buyingPriceUnit: (value) => Number(value) % 1000 !== 0,
  bonusNumberRange: (value) => Number(value) < 1 || Number(value) > 45,
};

export default VALIDATOR;
