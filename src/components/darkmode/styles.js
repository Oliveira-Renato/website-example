import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.baseColor};
  background-color: rgba(0, 0, 0, 0);
  /* width: 80px;
  height: 40px; */
  position: absolute;
  top:70px;
  display: block;
  padding-left: 10px;
  margin-left: 4px;
  border-radius: 40%;
  .buttonTheme{
    color: ${props => props.theme.colors.baseColor};
    cursor: pointer;
    width: 80px;
    height: 40px;
  }
`;