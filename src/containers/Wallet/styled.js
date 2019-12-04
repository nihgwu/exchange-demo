import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  width: 100vw;
  height: 100vh;
`;
