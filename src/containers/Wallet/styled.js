import styled from 'styled-components';

import { colors } from 'utils/theme';

export const Wrapper = styled.div`
  background-color: ${colors.primary};
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 16px;
  width: 100vw;
  height: 100vh;
`;
