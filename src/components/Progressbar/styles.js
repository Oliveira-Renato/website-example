import styled from "styled-components";

export const Container = styled.div`
.aaa {
  z-index: 100;
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  margin-top: 7.2rem;
  .progress-container { 
    width: 100%;
    height: 3px;
    background: linear-gradient(
    270deg,
    hsla(${props => props.theme.colors.hue}, 65%, 88%, 0.34) 0%,
    hsla(${props => props.theme.colors.hue}, 36%, 57%, 1) 100%
  );
    .progress-bar {
      height: 3px;
      background:${props => props.theme.colors.barLoadingColor};
      width: 0%;
    }
  }
}
`;