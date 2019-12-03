import styled, { css } from 'styled-components';

import { boolean, colors } from 'utils/theme';

export const Wrapper = styled.div`
  background-color: ${colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  background-color: ${colors.primary};
  height: 70px;
  padding: 30px 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  flex: 1;
`;

export const HeaderRight = styled.div`
  flex: 1;
  text-align: right;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${colors.white};
  padding: 5px 10px;

  ${boolean(
    'disabled',
    css`
      color: ${colors.light};
    `
  )}
`;

export const RateDropdown = styled.button`
  background-color: ${colors.primaryActive};
  color: ${colors.white};
  border: 1px solid ${colors.light};
  border-radius: 5px;
  padding: 5px;
`;
