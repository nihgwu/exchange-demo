import styled, { css } from 'styled-components';

import { boolean } from 'utils/theme';

export const Wrapper = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${boolean(
    'disabled',
    css`
      opacity: 0.6;
    `
  )}
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2e6cdd;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.light};
`;

export const Svg = styled.svg`
  color: ${props => props.theme.colors.white};
`;

export const Label = styled.label`
  color: ${props => props.theme.colors.light};
  font-size: 14px;
  margin-top: 10px;
`;
