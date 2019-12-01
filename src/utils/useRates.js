import { useRef, useState, useEffect } from 'react';

import { getRates, cancelGetRates } from 'services/rate';

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

          // if failed to fetch rates, retry immediately
          // clearInterval(interval);
          // interval = setInterval(callback, 100 * 1000);
          // callback();
        }
      };

      interval = setInterval(callback, 100 * 1000);
      callback();
      initial.current = false;
    }

    return () => clearInterval(interval);
  }, [setData]);

  return data;
};

export default useRates;
