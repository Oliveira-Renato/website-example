
import styled from 'styled-components';

export const ContainerMod = styled.div`

main .section_mod { 
  @media (min-width: 1022px){
    padding: 0rem 6.4rem 16.8rem 6.4rem;
  }    
}

.card_space > .card{
  inline-size: 92%;
  @media screen and (max-width:600px){
    inline-size: 100%;
  }
}
.card .btn-ver-mais {
  display: flex;
  justify-content: center;

}
.ola {
  aspect-ratio: 16/6;
}

.card .card-content {
  height: 160px;
  overflow: hidden;
  border-bottom: 1px solid #dfdfdf;
}

.card .icones {
  font-size: 6rem;
}
`;



