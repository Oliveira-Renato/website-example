import styled from 'styled-components';

export const Container = styled.div`
#footer{
	background-color: ${props => props.theme.colors.baseColor};
  padding: 8rem 0 0;
  position: absolute;
  width: 100%;
  z-index: 0;
	.row{
    display: flex;
    flex-wrap: wrap;
  }
  
  .copyRight{
    margin-top:  7rem;
    background: ${props => props.theme.colors.baseColorAlt};
    color: #FFF;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height:  4rem; 
    justify-content:center;
    align-items:center;
    bottom: 0;
    font-size:  1rem;
    z-index: 0;
  }
}
.footer-col{     
  width: 25%;
  h4{
    font-size: 1.8rem;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 2.1875rem;
    font-weight: 500;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left:0;
      bottom: -1rem;
      background-color: ${props => props.theme.colors.textColorLight};
      height: 0.125rem;
      box-sizing: border-box;
      width: 5rem;
    }
  }
  
  ul{
    list-style: none;
    li {
      &:not(:last-child){
        margin-bottom:  1rem;
        font-size: 1.5rem;
        margin-right:  1rem;
      }
      a{
        font-size: 1.6rem;
        text-transform: capitalize;
        text-decoration: none;
        font-weight: 300;
        color: ${props => props.theme.colors.textColorLight};
        display: block;
        transition: all 0.3s ease;
        &:hover{
          padding-left: 0.5rem;
        }
      }
    }
  }
  .social-links{
    .socialmedia {
      font-size: 2.4rem;
      object-fit: cover;
      margin-right:  1rem;
    }
    a{
      display: inline-block;
      margin:0  1rem  1rem 0;
      text-align: center;
      line-height:  4rem;
      color: #FFF;
      transition: all 0.5s ease;  
      &:hover{
        color: ${props => props.theme.colors.barLoadingColor};
      }
    }
  }
}
/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 3.2rem;  
  }
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
    text-align: center;
    
    h4::before {
     left: auto;
     width: 5rem;
    }
  }
  .footer-col .social-links a {
    margin: 0  1rem  1rem  1rem;
    text-align: center;
  }
  ul {
    padding: 0;
  }
}
`;