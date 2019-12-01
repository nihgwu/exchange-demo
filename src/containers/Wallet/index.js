import React, { useEffect } from 'react';
import ActionButton from 'components/ActionButton';
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
        <ActionButton icon={Plus}>Top Up</ActionButton>
        <ActionButton icon={RefreshCw} onClick={dispatch.wallet.showExchange}>
          Exchange
        </ActionButton>
        <ActionButton icon={ArrowRight}>Bank</ActionButton>
      </ActionBar>
    </Wrapper>
  );
};

export default Exchange;
