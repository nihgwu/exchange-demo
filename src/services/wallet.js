const MOCK_BALANCE = {
  GBP: 100,
  EUR: 50,
  USD: 0,
};

export const getBalance = async userId => {
  return MOCK_BALANCE;
};

export const exchange = async ({ fromCode, toCode, fromAmount, toAmount }) => {
  MOCK_BALANCE[fromCode] -= fromAmount;
  MOCK_BALANCE[toCode] += toAmount;

  return MOCK_BALANCE;
};
