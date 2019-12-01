import { init } from '@rematch/core';

import * as models from 'models';
import createLoadingPlugin from 'plugins/loading';

const store = init({
  redux: {
    devtoolOptions: {
      name: 'Exchange Demo',
      disabled: process.env.NODE_ENV === 'production',
      actionSanitizer: action => {
        if (!action.type.startsWith('loading/')) return action;

        // replace display action type for debug
        const type = action.type.replace(
          'loading/',
          `${action.payload.name}/${action.payload.action}@`
        );
        return { ...action, type };
      },
    },
  },
  models,
  plugins: [createLoadingPlugin()],
});

export default store;
