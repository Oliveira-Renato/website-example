import styled from "styled-components";

export const Container = styled.div`
@media (min-width: 1032px) {
  main .section {
    margin: 0;
    padding: 0;
 }
}
main #map .container {
  padding: 0;
}
main #map .container .mapSize {
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (min-width: 270px) {
    width: 100% !important;
    height: 600px !important;
  }
}
main #map .container header {
  margin: 0;
}
.mapText {
  color: #fff !important;
}

@media (min-width: 1400px) {
  .mapSize {
    min-width: 1200px !important;
    min-height: 900px !important;
 }
}
.aqui {
  height: 100vh;
}
svg {
  display: inline-block;
  vertical-align: middle;
}
.controls {
  display: flex;
  left: 50%;
  margin-top: 3.25rem;
  position: absolute;
}

.controls .glassButtons  {
  position: relative;
  display: flex ;
}

.controls .glassButtons  .glass-m{
  font-size:2.6rem;
  margin:0.1rem;

  @media (min-width: 1400px) {
    font-size: 3.6rem;
  }
}

.controls .glassButtons .glass-m .map_glass {
  color: ${props => props.theme.colors.baseColor};
}

.color-pointer {
  color: ${props => props.theme.colors.baseColor};
}
text {
  fill: ${props => props.theme.colors.titleColor} !important;
}
`