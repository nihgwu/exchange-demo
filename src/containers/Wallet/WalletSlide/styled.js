import styled from 'styled-components';

export const Description = styled.div`
  color: ${props => props.theme.colors.light};
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
  color: ${props => props.theme.colors.white};
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
