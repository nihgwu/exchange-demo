import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Circle, Svg, Label } from './styled';

const ActionButton = forwardRef(
  ({ children, icon, iconSize = 48, ...rest }, ref) => (
    <Wrapper width={iconSize} {...rest} ref={ref}>
      <Circle size={iconSize}>
        <Svg as={icon} />
      </Circle>
      {children && <Label>{children}</Label>}
    </Wrapper>
  )
);

ActionButton.displayName = 'ActionButton';
ActionButton.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.elementType.isRequired,
  iconSize: PropTypes.number,
};

export default ActionButton;
