import React from 'react';
import { render } from 'utils/test';

import WalletSlide from './index';

const balance = {
  GBP: 100,
  EUR: 50,
  USD: 0,
};

describe('WalletSlide', () => {
  it('should not render balance if balance is not available', () => {
    const { queryAllByText, rerender } = render(<WalletSlide />);

    expect(queryAllByText('--')).toHaveLength(3);

    rerender(<WalletSlide balance={balance} />);
    expect(queryAllByText('--')).toHaveLength(0);
  });
});
