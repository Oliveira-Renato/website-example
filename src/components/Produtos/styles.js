import styled from 'styled-components';


export const ContainerProducts = styled.div`
  .wrapper{
  display: grid;
  // grid-template-columns: 200px 200px ;
  grid-gap: 50px;
  background-color: #fff;
  color: #444;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 200px);

  

  
}

.col{
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
  }

`;