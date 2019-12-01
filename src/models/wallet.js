import Immutable from 'seamless-immutable';

import { getBalance, exchange } from 'services/wallet';
import { currencyCodes } from 'utils/currency';

export default {
  state: Immutable.from({
    showExchange: false,
    currentCode: currencyCodes[0],
    balance: null,
  }),
  reducers: {
    showExchange(state, payload) {
      return state.merge({ showExchange: true });
    },
    hideExchange(state, payload) {
      return state.merge({ showExchange: false });
    },
    setCurrentCode(state, currentCode) {
      return state.merge({ currentCode });
    },
    updateBalance(state, balance) {
      return state.merge({ balance });
    },
  },
  effects: {
    async loadBalance(payload, { wallet }) {
      const balance = await getBalance();

      this.updateBalance(balance);
    },
    async exchange(payload, { wallet }) {
      const balance = await exchange(payload);

      this.updateBalance(balance);
      this.hideExchange();
    },
  },
};
