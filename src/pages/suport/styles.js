import styled from 'styled-components';

export const Container = styled.div`
  a {
  color: white;
  display: inline-block;
  font-weight: 400;
  text-decoration: none;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight:600;
  text-transform: uppercase;
  display: inline-block;
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formcontent {
  border-radius:  10px 10px 10px 10px;
  background: white;
  width: 100%;
  max-width: 450px;
  position: relative;
  box-shadow: 0px 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: 11rem;
}

.icon {
  width: 200px;
  margin-bottom: 10px;
}

.icon-2 {
  width: 120px;
  margin-bottom: 10px;
}

.formfooter {
  background-color: white;
  border-radius: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  border-radius: 0 0 10px 10px;
}

.formfooter a {
  color: rgb(79, 107, 107);
  font-weight: 700;
}

h2.active {
  color: rgb(79, 107, 107);
  font-size: 20px;
  font-weight: bold;
}

input[type=button], input[type=submit]  
{
  background-color: ${props => props.theme.colors.baseColor};
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  transition: all 0.5s ease-in-out;
}

.btn:hover {
  cursor: pointer;  
  background-color:${props => props.theme.colors.baseColorAlt};  
}


input 
{
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 65%;
  border: 2px solid white;
  transition: all 0.5s ease-in-out;
  border-radius: 5px 5px 5px 5px;

  
  
}

input:focus
{
  background-color: white;
  border-bottom: 2px solid ${props => props.theme.colors.baseColor};

  

}

input::placeholder
{
  color: #cccccc;
}

*:focus {
  outline: none;
}

@media (max-width: 600px) {
  input {
    width: 80%;
  }
}
`;