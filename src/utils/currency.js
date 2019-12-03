export const currencies = {
  GBP: {
    code: 'GBP',
    symbol: '£',
    description: 'British Pound',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    description: 'Euro',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    description: 'American Dollar',
  },
};

export const currencyCodes = Object.keys(currencies);

export const getCodeIndex = code => currencyCodes.indexOf(code);

export const getNextCode = code => {
  const idx = getCodeIndex(code);
  let nextIdx = idx + 1;
  if (nextIdx >= currencyCodes.length) nextIdx = 0;

  return currencyCodes[nextIdx];
};

export const getCodeSymbol = code => {
  const currency = currencies[code];
  return currency ? currency.symbol : '';
};

// trim trailing zeros
export const trimNumber = (value, maxDigits = 2) => {
  return Number(value.toFixed(maxDigits));
};

export const formatMoney = (code, value) => {
  return `${getCodeSymbol(code)}${trimNumber(value)}`;
};

export const formatRate = (base, code, rates) => {
  if (!rates || !rates[code] || !rates[code]) return '';

  const rate = rates[code] / rates[base];
  const value = trimNumber(rate, 4);
  return `${getCodeSymbol(base)}1 = ${getCodeSymbol(code)}${value}`;
};
