import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNextCode, formatRate, trimNumber } from 'utils/currency';
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
  const [direction, setDirection] = useState('from');
  const [amount, setAmount] = useState(0);
  const { rates, loading, error } = useRates();
  const dispatch = useDispatch();

  const rate = rates ? rates[toCode] / rates[fromCode] : 1;
  const maxFromAmount = balance[fromCode];
  const maxToAmount = rates ? maxFromAmount * rate : 0;
  const fromAmount = direction === 'from' ? amount : trimNumber(amount / rate);
  const toAmount = direction === 'to' ? amount : trimNumber(amount * rate);

  const hideRate = !rates || loading || error || fromCode === toCode;
  const exchangeDisabled = hideRate || fromAmount === 0 || fromAmount > maxFromAmount;

  const handleFromCodeChange = useCallback(
    code => {
      setFromCode(code);
      setAmount(0);
    },
    [setFromCode, setAmount]
  );

  const handleToCodeChange = useCallback(
    code => {
      setToCode(code);
      setAmount(0);
    },
    [setToCode, setAmount]
  );

  const handleFromFocus = useCallback(() => {
    if (direction === 'to') {
      setDirection('from');
      setAmount(fromAmount);
    }
  }, [direction, setDirection, setAmount, fromAmount]);

  const handleToFocus = useCallback(() => {
    if (direction === 'from') {
      setDirection('to');
      setAmount(toAmount);
    }
  }, [direction, setDirection, setAmount, toAmount]);

  const handleExchange = useCallback(() => {
    dispatch.wallet.exchange({ fromCode, fromAmount, toCode, toAmount });
  }, [dispatch, fromCode, fromAmount, toCode, toAmount]);

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
        onFocus={handleFromFocus}
        onChange={setAmount}
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
        onFocus={handleToFocus}
        onChange={setAmount}
        onCodeChange={handleToCodeChange}
      />
    </Wrapper>
  );
};

export default Exchange;
