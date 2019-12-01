import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNextCode, formatRate } from 'utils/currency';
import useRates from 'utils/useRates';

import {
  Wrapper,
  Header,
  Button,
  RateDropdown,
  HeaderLeft,
  HeaderRight,
} from './styled';
import ExchangeSlide from './ExchangeSlide';

const Exchange = () => {
  const [currentCode, balance] = useSelector(state => [
    state.wallet.currentCode,
    state.wallet.balance,
  ]);
  const [fromCode, setFromCode] = useState(currentCode);
  const [toCode, setToCode] = useState(getNextCode(currentCode));
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const { rates, loading, error } = useRates();
  const dispatch = useDispatch();

  const handleFromCodeChange = useCallback(
    code => {
      setFromCode(code);
      setFromAmount(0);
      setToAmount(0);
    },
    [setFromCode, setFromAmount, setToAmount]
  );

  const handleToCodeChange = useCallback(
    code => {
      setToCode(code);
      setFromAmount(0);
      setToAmount(0);
    },
    [setToCode, setFromAmount, setToAmount]
  );

  const handleFromAmountChange = useCallback(
    value => {
      const newValue = (value * rates[toCode]) / rates[fromCode];
      setFromAmount(value);
      setToAmount(Number(newValue.toFixed(2)));
    },
    [rates, fromCode, toCode]
  );

  const handleToAmountChange = useCallback(
    value => {
      const newValue = (value * rates[fromCode]) / rates[toCode];
      setToAmount(value);
      setFromAmount(Number(newValue.toFixed(2)));
    },
    [rates, fromCode, toCode]
  );

  const handleExchange = useCallback(() => {
    dispatch.wallet.exchange({ fromCode, fromAmount, toCode, toAmount });
  }, [dispatch, fromCode, fromAmount, toCode, toAmount]);

  const hideRate = !rates || loading || error || fromCode === toCode;
  const exchangeDisabled = hideRate || fromAmount === 0;
  const maxFromAmount = balance[fromCode];
  const maxToAmount = rates
    ? (maxFromAmount * rates[toCode]) / rates[fromCode]
    : 0;

  return (
    <Wrapper>
      <Header>
        <HeaderLeft>
          <Button onClick={dispatch.wallet.hideExchange}>Cancel</Button>
        </HeaderLeft>
        {!hideRate && (
          <RateDropdown>{formatRate(fromCode, toCode, rates)}</RateDropdown>
        )}
        <HeaderRight>
          <Button disabled={exchangeDisabled} onClick={handleExchange}>
            Exchange
          </Button>
        </HeaderRight>
      </Header>
      <ExchangeSlide
        direction="from"
        balance={balance}
        rates={rates}
        baseCode={fromCode}
        targetCode={toCode}
        value={fromAmount}
        maxValue={maxFromAmount}
        disabled={hideRate}
        onChange={handleFromAmountChange}
        onCodeChange={handleFromCodeChange}
      />
      <ExchangeSlide
        direction="to"
        balance={balance}
        rates={rates}
        baseCode={toCode}
        targetCode={fromCode}
        value={toAmount}
        maxValue={maxToAmount}
        disabled={hideRate}
        onChange={handleToAmountChange}
        onCodeChange={handleToCodeChange}
      />
    </Wrapper>
  );
};

export default Exchange;
