import React from 'react';
import { render, fireEvent } from 'utils/test';

import IconButton from './index';

describe('IconButton', () => {
  it('should renders correctly', () => {
    const { container } = render(<IconButton icon="svg" size={24} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept children as label', () => {
    const { getByText } = render(<IconButton icon="svg">Action</IconButton>);

    expect(getByText('Action')).toBeTruthy();
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
