import { useRef, useState, useEffect } from 'react';

import { getRates, cancelGetRates } from 'services/rate';

const TIMEOUT = 10 * 1000;

const useRates = () => {
  const initial = useRef(true);
  const [data, setData] = useState({
    loading: true,
    rates: null,
    error: null,
  });

  useEffect(() => {
    let interval;
    if (initial.current) {
      const callback = async () => {
        // cancel pending request
        cancelGetRates();
        try {
          const rates = await getRates();
          // TODO: we could avoid triggering re-render if rates stays the same
          setData({
            loading: false,
            rates,
            error: null,
          });
        } catch (error) {
          setData({
            loading: false,
            rates: null,
            error,
          });

          // TODO: if failed to fetch rates, retry immediately
          // clearInterval(interval);
          // interval = setInterval(callback, TIMEOUT);
          // callback();
        }
      };

      interval = setInterval(callback, TIMEOUT);
      callback();
      initial.current = false;
    }

    return () => {
      cancelGetRates();
      clearInterval(interval);
    };
  }, [setData]);

  return data;
};

export default useRates;
