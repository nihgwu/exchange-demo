import {
  getCodeIndex,
  getNextCode,
  getCodeSymbol,
  formatMoney,
  formatRate,
} from './currency';

describe('currency utils', () => {
  describe('getCodeIndex', () => {
    it('get code index correctly', () => {
      const idx = getCodeIndex('EUR');
      expect(idx).toBe(1);
    });

    it('returns -1 with invalid code', () => {
      const idx = getCodeIndex('RMB');
      expect(idx).toBe(-1);
    });
  });

  describe('getNextCode', () => {
    it('get next code correctly', () => {
      expect(getNextCode('GBP')).toBe('EUR');
      expect(getNextCode('EUR')).toBe('USD');
      expect(getNextCode('USD')).toBe('GBP');
    });

    it('returns the first code with invalid code', () => {
      expect(getNextCode('RMB')).toBe('GBP');
    });
  });

  describe('formatMoney', () => {
    it('format correctly', () => {
      expect(formatMoney('GBP', 0)).toBe('£0');
      expect(formatMoney('GBP', 0.0)).toBe('£0');
      expect(formatMoney('GBP', 1.1)).toBe('£1.1');
      expect(formatMoney('GBP', 1.111)).toBe('£1.11');
    });
  });

  describe('formatRate', () => {
    const rates = {
      GBP: 1,
      EUR: 1.5,
      USD: 1.333333,
    };

    it('format rate correctly', () => {
      expect(formatRate('GBP', 'EUR', rates)).toBe('£1 = €1.5');
      expect(formatRate('GBP', 'USD', rates)).toBe('£1 = $1.3333');
    });

    it('returns with invalid data', () => {
      expect(formatRate('GBP', 'USD', {})).toBe('');
      expect(formatRate('GBP', 'RMB', rates)).toBe('');
    })
  });
});
