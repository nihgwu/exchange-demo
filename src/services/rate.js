import axios from 'axios';

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

export const cancelGetRates = (...args) => {
  source.cancel(...args);
  source = CancelToken.source();
};

export const getRates = async (symbols = 'GBP,EUR,USD') => {
  const response = await axios.get(
    'https://openexchangerates.org/api/latest.json',
    {
      params: {
        app_id: '9356d23d12ab4998b467db1492e3fec7',
        symbols,
      },
      cancelToken: source.token,
    }
  );

  return response.data.rates;
};
