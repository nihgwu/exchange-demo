const createLoadingAction = toggle => (state, { name, action }) => {
  return {
    ...state,
    [name]: {
      ...state[name],
      [action]: toggle,
    },
  };
};

const createErrorAction = failed => (state, { name, action, error }) => {
  return {
    ...state,
    [name]: {
      ...state[name],
      [action]: failed ? error : null,
    },
  };
};

export default (config = {}) => {
  const loading = {
    name: 'loading',
    reducers: {
      start: createLoadingAction(true),
      success: createLoadingAction(false),
      fail: createLoadingAction(false),
    },
    state: {},
  };

  const error = {
    name: 'error',
    reducers: {
      'loading/start': createErrorAction(false),
      'loading/success': createErrorAction(false),
      'loading/fail': createErrorAction(true),
    },
    state: {},
  };

  return {
    config: {
      models: {
        loading,
        error,
      },
    },
    onModel({ name }) {
      // do not run dispatch on 'loading' and 'error' model
      if (name === 'loading' || name === 'error') return;

      loading.state[name] = {};
      error.state[name] = {};
      const modelActions = this.dispatch[name];

      Object.keys(modelActions).forEach(action => {
        if (!this.dispatch[name][action].isEffect) return;

        loading.state[name][action] = false;
        error.state[name][action] = null;
        const actionType = `${name}/${action}`;
        // ignore items not in whitelist
        if (config.whitelist && !config.whitelist.includes(actionType)) return;
        // ignore items in blacklist
        if (config.blacklist && config.blacklist.includes(actionType)) return;

        const origEffect = this.dispatch[name][action];
        const effectWrapper = async (payload, meta, ...args) => {
          try {
            this.dispatch.loading.start({ name, action });
            const effectResult = await origEffect(payload, meta, ...args);
            this.dispatch.loading.success({ name, action });
            return effectResult;
          } catch (err) {
            if (err.ignore) return null;

            this.dispatch.loading.fail({
              name,
              action,
              error: err,
              meta,
            });

            if (err.__CANCEL__) return null;
            if (window.newrelic) window.newrelic.noticeError(error);
            if (process.env.NODE_ENV !== 'production') console.error(err);
            if (config.throwlist && config.throwlist.includes(actionType))
              throw err;
            return null;
          }
        };
        effectWrapper.isEffect = true;
        this.dispatch[name][action] = effectWrapper;
      });
    },
  };
};
