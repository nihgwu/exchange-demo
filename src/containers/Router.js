import React from 'react';
import { useSelector } from 'react-redux';

import Wallet from './Wallet';
import Exchange from './Exchange';

const Router = () => {
  const showExchange = useSelector(state => state.wallet.showExchange);

  return (
    <>
      <Wallet />
      {showExchange && <Exchange />}
    </>
  );
};

export default Router;
