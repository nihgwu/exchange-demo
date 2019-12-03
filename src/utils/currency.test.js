import {
  getCodeIndex,
  getNextCode,
  getCodeSymbol,
  trimNumber,
  formatMoney,
  formatRate,
} from './currency';

describe('currency utils', () => {
  describe('getCodeIndex', () => {
    it('should get code index correctly', () => {
      expect(getCodeIndex('GBP')).toBe(0);
      expect(getCodeIndex('EUR')).toBe(1);
      expect(getCodeIndex('USD')).toBe(2);
    });

    it('should returns -1 with invalid code', () => {
      expect(getCodeIndex('RMB')).toBe(-1);
    });
  });

  describe('getNextCode', () => {
    it('should get next code correctly', () => {
      expect(getNextCode('GBP')).toBe('EUR');
      expect(getNextCode('EUR')).toBe('USD');
      expect(getNextCode('USD')).toBe('GBP');
    });

    it('should returns the first code with invalid code', () => {
      expect(getNextCode('RMB')).toBe('GBP');
    });
  });

  describe('getCodeSymbol', () => {
    it('should get code symbol correctly', () => {
      expect(getCodeSymbol('GBP')).toBe('£');
      expect(getCodeSymbol('EUR')).toBe('€');
      expect(getCodeSymbol('USD')).toBe('$');
    });

    it('should returns empty string with invalid code', () => {
      expect(getCodeSymbol('RMB')).toBe('');
    });
  });

  describe('trimNumber', () => {
    it('should trim trailing zeros correctly', () => {
      expect(trimNumber(0)).toBe(0);
      expect(trimNumber(0.1)).toBe(0.1);
      expect(trimNumber(0.111)).toBe(0.11);
      expect(trimNumber(0.119)).toBe(0.12);
      expect(trimNumber(0.199)).toBe(0.2);
    });

    it('should trim trailing with maxDigits correctly', () => {
      expect(trimNumber(0, 4)).toBe(0);
      expect(trimNumber(0.1, 4)).toBe(0.1);
      expect(trimNumber(0.111, 4)).toBe(0.111);
      expect(trimNumber(0.119, 4)).toBe(0.119);
      expect(trimNumber(0.1111, 4)).toBe(0.1111);
      expect(trimNumber(0.11111, 4)).toBe(0.1111);
      expect(trimNumber(0.11119, 4)).toBe(0.1112);
      expect(trimNumber(0.11199, 4)).toBe(0.112);
    });
  });

  describe('formatMoney', () => {
    it('should format money correctly', () => {
      expect(formatMoney('GBP', 0)).toBe('£0');
      expect(formatMoney('EUR', 0.0)).toBe('€0');
      expect(formatMoney('USD', 1.1)).toBe('$1.1');
      expect(formatMoney('RMB', 1.111)).toBe('1.11');
    });
  });

  describe('formatRate', () => {
    it('should format rate correctly', () => {
      const rates = {
        GBP: 1,
        EUR: 1.5,
        USD: 1.333333,
      };

      expect(formatRate('GBP', 'EUR', rates)).toBe('£1 = €1.5');
      expect(formatRate('GBP', 'USD', rates)).toBe('£1 = $1.3333');
    });

    it('should returns with invalid data', () => {
      const rates = {
        GBP: 1,
        EUR: 1.5,
        USD: 1.333333,
      };

      expect(formatRate('GBP', 'USD', {})).toBe('');
      expect(formatRate('GBP', 'RMB', rates)).toBe('');
    });
  });
});
