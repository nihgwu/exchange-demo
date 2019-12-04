import React, {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { trimNumber } from 'utils/currency';

import { Input } from './styled';

const isValidInput = input => input === '' || /^\d+\.?\d{0,2}$/.test(input);

const normalizeValue = value => {
  if (!value) return '';

  return trimNumber(value).toString();
};

const CurrencyInput = forwardRef(function CurrencyInput(
  { value: _value, maxValue, prefix = '', onChange, ...rest },
  ref
) {
  const prevValue = useRef(_value);
  const [value, setValue] = useState(normalizeValue(_value));
  const handleChange = useCallback(
    e => {
      const input = e.target.value.replace(prefix, '');

      if (isValidInput(input)) {
        const value = Number(input);
        if (maxValue !== undefined && value > maxValue) return;

        setValue(input);
        onChange && onChange(Number(value));
      }
    },
    [prefix, maxValue, setValue, onChange]
  );

  const handleBlur = useCallback(() => {
    if (Number(value) === 0) {
      setValue('');
    } else if (value[value.length - 1] === '.') {
      setValue(value.substr(0, value.length - 1));
    }
  }, [value]);

  useEffect(() => {
    if (prevValue.current !== _value) {
      setValue(normalizeValue(_value));
      prevValue.current = _value;
    }
  }, [prevValue, _value]);

  return (
    <Input
      {...rest}
      ref={ref}
      value={value === '' ? '' : `${prefix}${value}`}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
});

CurrencyInput.propTypes = {
  value: PropTypes.number,
  maxValue: PropTypes.number,
  prefix: PropTypes.string,
  onChange: PropTypes.func,
};

export default CurrencyInput;
