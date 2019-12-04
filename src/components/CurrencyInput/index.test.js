import React from 'react';
import { render, fireEvent } from 'utils/test';

import CurrencyInput from './index';

describe('CurrencyInput', () => {
  it('should renders correctly', () => {
    const { container } = render(<CurrencyInput />);
    const input = container.firstChild;

    expect(input).toMatchSnapshot();
  });

  it('should normalizeValue correctly', () => {
    const { container, rerender } = render(<CurrencyInput />);
    const input = container.firstChild;

    expect(input).toHaveValue('');

    rerender(<CurrencyInput value={0} />);
    expect(input).toHaveValue('');

    rerender(<CurrencyInput value={0.1111} />);
    expect(input).toHaveValue('0.11');
  });

  it('should prefix if value is not 0', () => {
    const { container, rerender } = render(<CurrencyInput prefix="$" />);
    const input = container.firstChild;

    expect(input).toHaveValue('');

    rerender(<CurrencyInput prefix="$" value={0} />);
    expect(input).toHaveValue('');

    rerender(<CurrencyInput prefix="$" value={0.1} />);
    expect(input).toHaveValue('$0.1');
  });

  it('should clear input if value is 0 on blur', () => {
    const { container } = render(<CurrencyInput prefix="$" />);
    const input = container.firstChild;

    fireEvent.change(input, { target: { value: '0.0' } });
    expect(input).toHaveValue('$0.0');

    fireEvent.blur(input);
    expect(input).toHaveValue('');
  });

  it('should remove trailing dot', () => {
    const { container } = render(<CurrencyInput prefix="$" />);
    const input = container.firstChild;

    fireEvent.change(input, { target: { value: '10.' } });
    expect(input).toHaveValue('$10.');

    fireEvent.blur(input);
    expect(input).toHaveValue('$10');
  });

  it('should only accept valid number input', () => {
    const handleChange = jest.fn();
    const { container } = render(<CurrencyInput prefix="$" onChange={handleChange} />);
    const input = container.firstChild;

    fireEvent.change(input, { target: { value: '10' } });
    expect(input).toHaveValue('$10');
    expect(handleChange).toHaveBeenCalledWith(10);

    fireEvent.change(input, { target: { value: '10.$' } });
    expect(input).toHaveValue('$10.');
    expect(handleChange).toHaveBeenCalledWith(10);

    expect(handleChange).toHaveBeenCalledTimes(2);
    fireEvent.change(input, { target: { value: '10..' } });
    expect(input).toHaveValue('$10.');
    expect(handleChange).toHaveBeenCalledTimes(2);

    fireEvent.change(input, { target: { value: '10.1' } });
    expect(input).toHaveValue('$10.1');
    expect(handleChange).toHaveBeenCalledWith(10.1);

    expect(handleChange).toHaveBeenCalledTimes(3);
    fireEvent.change(input, { target: { value: '10.1.' } });
    expect(input).toHaveValue('$10.1');
    expect(handleChange).toHaveBeenCalledTimes(3);

    fireEvent.change(input, { target: { value: '10.11' } });
    expect(input).toHaveValue('$10.11');
    expect(handleChange).toHaveBeenCalledWith(10.11);

    expect(handleChange).toHaveBeenCalledTimes(4);
    fireEvent.change(input, { target: { value: '10.111' } });
    expect(input).toHaveValue('$10.11');
    expect(handleChange).toHaveBeenCalledTimes(4);
  });
});
