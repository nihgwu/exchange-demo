import React from 'react';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';

import IconButton from './index';

describe('IconButton', () => {
  it('should renders correctly', () => {
    const { container } = render(<IconButton icon="svg" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept children as label', () => {
    const { getByText } = render(<IconButton icon="svg">Action</IconButton>);

    expect(getByText('Action')).toBeTruthy();
  });

  it('should set icon size correctly', () => {
    const { container } = render(<IconButton icon="svg" iconSize={24} />);

    const circle = container.firstChild.firstChild;
    expect(circle).toHaveStyleRule('width', '24px');
    expect(circle).toHaveStyleRule('height', '24px');
  });

  it('should not invoke click event when disabled', () => {
    const handleClick = jest.fn();
    const { container, rerender } = render(
      <IconButton icon="svg" onClick={handleClick}>
        Action
      </IconButton>
    );

    fireEvent.click(container.firstChild);
    expect(handleClick).toHaveBeenCalledTimes(1);

    rerender(
      <IconButton disabled icon="svg" onClick={handleClick}>
        Action
      </IconButton>
    );

    fireEvent.click(container.firstChild);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
