import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Circle, Svg, Label } from './styled';

const IconButton = forwardRef(function IconButton(
  { children, icon, iconSize = 48, disabled, ...rest },
  ref
) {
  return (
    <Wrapper {...rest} ref={ref} disabled={disabled}>
      <Circle size={iconSize}>
        <Svg as={icon} />
      </Circle>
      {children && <Label>{children}</Label>}
    </Wrapper>
  );
});

IconButton.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.elementType.isRequired,
  iconSize: PropTypes.number,
  disabled: PropTypes.bool,
};

export default IconButton;
