const MOCK_BALANCE = {
  GBP: 100,
  EUR: 50,
  USD: 0,
};

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getBalance = async userId => {
  await pause(300);
  return MOCK_BALANCE;
};

export const exchange = async ({ fromCode, toCode, fromAmount, toAmount }) => {
  MOCK_BALANCE[fromCode] -= fromAmount;
  MOCK_BALANCE[toCode] += toAmount;

  await pause(150);
  return MOCK_BALANCE;
};
