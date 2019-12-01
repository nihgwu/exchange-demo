import styled, { css } from 'styled-components';

import CurrencyInput from 'components/CurrencyInput';
import { variant } from 'utils/theme';

export const Wrapper = styled.div`
  height: 200px;

  ${variant('direction', {
    from: css`
      background-color: ${props => props.theme.colors.primary};
      position: relative;

      &::after {
        position: absolute;
        left: 50%;
        bottom: 0;
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 16px 16px 0;
        border-color: ${props => props.theme.colors.primary} transparent
          transparent;
        transform: translateX(-50%) translateY(100%);
      }
    `,
    to: css`
      background-color: #1c4eb3;
    `,
  })}
`;

export const Item = styled.div`
  padding: 30px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const Code = styled.div`
  width: 40%;
  color: ${props => props.theme.colors.white};
  font-size: 36px;
  padding-right: 10px;
`;

export const Input = styled(CurrencyInput)`
  width: 60%;
  color: ${props => props.theme.colors.white};
  font-size: 36px;
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 10px 0;
`;

export const Text = styled.div`
  color: ${props => props.theme.colors.light};
  font-size: 16px;
`;
