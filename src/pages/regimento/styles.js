import styled from 'styled-components';

export const ContainerRule = styled.div`
.wrapper{
  display: grid;
  grid-gap: 50px;
  background-color: #fff;
  color: #444;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 200px);

  .col{
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
  }
}

main {
  section {
      .list-new-pattern {
        details {
          text-align: center;
          padding: 1.6rem 0;
          color: ${props => props.theme.colors.baseColor};
        }
        .list-one  {
          padding-bottom: 1.6rem;

          >li {
            list-style: disc !important;
            padding-bottom: 0.785rem;
            //list-style-type: circle !important;
            >p {
              font-weight: 600;
            }
            &::marker {
              color: ${props => props.theme.colors.baseColor};
            }
            .list-two {
              padding-left: 1.67rem;
              >li {
                list-style: circle !important;
                padding-top : 0.675rem;

                .list-third {
                  padding-left: 1.67rem;
                  >li {
                    list-style: square !important;
                    color: ${props => props.theme.colors.baseColor};
                  }
                }
              }
            } 
          }
        }
        h3 {
          padding-bottom: 1.6rem;
        }
      }
    }
  }
`;
