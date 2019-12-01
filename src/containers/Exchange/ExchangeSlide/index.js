import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

import {
  currencyCodes,
  getCodeIndex,
  formatMoney,
  formatRate,
} from 'utils/currency';
import { Wrapper, Item, Label, Code, Input, Balance, Text } from './styled';

const ExchangeSlide = ({
  direction = 'from',
  balance,
  rates,
  baseCode,
  targetCode,
  value,
  maxValue,
  disabled,
  onChange,
  onCodeChange,
  ...rest
}) => {
  const handleChange = useCallback(
    idx => {
      onCodeChange && onCodeChange(currencyCodes[idx]);
    },
    [onCodeChange]
  );

  const isSource = direction === 'from';
  const slideIndex = getCodeIndex(baseCode);
  return (
    <Wrapper direction={direction} {...rest}>
      <Carousel
        wrapAround
        dragging={false}
        slideIndex={slideIndex}
        afterSlide={handleChange}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
      >
        {currencyCodes.map(code => {
          const isCurrent = code === baseCode;

          return (
            <Item key={code} active={isCurrent}>
              <Label>
                <Code>{code}</Code>
                {isCurrent && !disabled && (
                  <Input
                    autoFocus={isSource}
                    value={value}
                    maxValue={maxValue}
                    prefix={isSource ? '-' : '+'}
                    onChange={onChange}
                  />
                )}
              </Label>
              <Balance>
                <Text>You have {formatMoney(code, balance[code])}</Text>
                {!isSource && baseCode !== targetCode && (
                  <Text>{formatRate(code, targetCode, rates)}</Text>
                )}
              </Balance>
            </Item>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

ExchangeSlide.propTypes = {
  direction: PropTypes.oneOf(['from', 'to']),
  balance: PropTypes.object,
  rates: PropTypes.object,
  baseCode: PropTypes.string.isRequired,
  targetCode: PropTypes.string.isRequired,
  value: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
  onCodeChange: PropTypes.func,
};

export default ExchangeSlide;
