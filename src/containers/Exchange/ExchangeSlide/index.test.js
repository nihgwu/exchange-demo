import React from 'react';
import { render } from 'utils/test';

import ExchangeSlide from './index';

const balance = {
  GBP: 100,
  EUR: 50,
  USD: 0,
};

const rates = {
  GBP: 1,
  EUR: 1.3,
  USD: 1.5,
};

describe('ExchangeSlide', () => {
  it('should not render input if rates is not available', () => {
    const { container } = render(
      <ExchangeSlide balance={balance} baseCode="GBP" targetCode="EUR" />
    );

    expect(container.getElementsByTagName('input')).toHaveLength(0);
  });

  it('should render 1 input only and auto focused', () => {
    const { container } = render(
      <ExchangeSlide
        balance={balance}
        rates={rates}
        baseCode="GBP"
        targetCode="EUR"
      />
    );

    expect(container.getElementsByTagName('input')).toHaveLength(1);
    expect(container.getElementsByTagName('input')[0]).toHaveFocus();
  });

  it('should not focus input if direction is to', () => {
    const { container } = render(
      <ExchangeSlide
        direction="to"
        balance={balance}
        rates={rates}
        baseCode="GBP"
        targetCode="EUR"
      />
    );

    expect(container.getElementsByTagName('input')).toHaveLength(1);
    expect(container.getElementsByTagName('input')[0]).not.toHaveFocus();
  });
});
