import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

import {
  currencies,
  currencyCodes,
  getCodeIndex,
  formatMoney,
} from 'utils/currency';
import { Wrapper, Item, Balance, Description } from './styled';

const WalletSlide = ({
  currentCode = currencyCodes[0],
  balance,
  onChange,
  ...rest
}) => {
  const handleChange = useCallback(
    idx => {
      onChange && onChange(currencyCodes[idx]);
    },
    [onChange]
  );

  return (
    <Wrapper {...rest}>
      <Carousel
        wrapAround
        slideIndex={getCodeIndex(currentCode)}
        cellAlign="center"
        transitionMode="scroll3d"
        slideWidth={0.6}
        zoomScale={0.6}
        afterSlide={handleChange}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
      >
        {currencyCodes.map(code => (
          <Item key={code}>
            <Balance>
              {balance ? formatMoney(code, balance[code]) : '--'}
            </Balance>
            <Description>
              {code} - {currencies[code].description}
            </Description>
          </Item>
        ))}
      </Carousel>
    </Wrapper>
  );
};

WalletSlide.propTypes = {
  currentCode: PropTypes.string,
  balance: PropTypes.object,
  onChange: PropTypes.func,
};

export default WalletSlide;
