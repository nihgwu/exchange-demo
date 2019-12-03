import styled from 'styled-components';

import { colors } from 'utils/theme';

export const Description = styled.div`
  color: ${colors.light};
  font-size: 16px;
`;

export const Wrapper = styled.div`
  height: 300px;

  li {
    :not(.slide-current) {
      ${Description} {
        display: none;
      }
    }
  }
`;

export const Balance = styled.div`
  color: ${colors.white};
  font-size: 32px;
  margin: 30px;
`;

export const Item = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
