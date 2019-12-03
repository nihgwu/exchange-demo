import React, { useEffect } from 'react';
import IconButton from 'components/IconButton';
import { Plus, RefreshCw, ArrowRight } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import { Wrapper, ActionBar, Loader } from './styled';
import WalletSlide from './WalletSlide';

const Exchange = ({ showExchange, ...rest }) => {
  const [currentCode, balance, loading, error] = useSelector(state => [
    state.wallet.currentCode,
    state.wallet.balance,
    state.loading.wallet.loadBalance,
    state.error.wallet.loadBalance,
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.wallet.loadBalance();
  }, [dispatch]);

  if (error) {
    return <Loader>Load balance failed</Loader>;
  }
  if (!balance || loading) {
    return <Loader>Loading</Loader>;
  }

  return (
    <Wrapper>
      <WalletSlide
        balance={balance}
        currentCode={currentCode}
        onChange={dispatch.wallet.setCurrentCode}
      />
      <ActionBar>
        <IconButton icon={Plus} disabled>
          Top Up
        </IconButton>
        <IconButton icon={RefreshCw} onClick={dispatch.wallet.showExchange}>
          Exchange
        </IconButton>
        <IconButton icon={ArrowRight} disabled>
          Bank
        </IconButton>
      </ActionBar>
    </Wrapper>
  );
};

export default Exchange;
