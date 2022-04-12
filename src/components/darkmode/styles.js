import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.baseColor};
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 70;
  left: 0;
  display: block;
  padding-left: 10px;
  margin-left: 4px;
  
  .buttonTheme{
    color: ${props => props.theme.colors.baseColor};
    cursor: pointer;
    width: 80px;
    height: 40px;
  }
`;  