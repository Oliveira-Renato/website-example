import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

import {faCookieBite} from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';

export function Cookie(){
  const [cookies, setCookie, removeCookie] = useCookies(["bessacare-cookie"]);

  return(
    <>
      <Container>
        <CookieConsent
          enableDeclineButton
          declineButtonText = "Recusar"
          declineButtonStyle = {{fontSize: "1.6rem", borderRadius: "2%", padding: "1rem 3.2rem",boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)"}}
          onAccept={() => {
            console.log(getCookieConsentValue());
            setCookie('bestWorkout', 'chest', { path: '/' })
          }}
          location="bottom" 
          buttonText="Aceitar"
          cookieName="bessacare-cookie"
          style={{fontSize: "14px", textAlignment: "left", border:"1px solid rgb(0 0 0 / 25%)",boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)" }}
          buttonStyle={{fontSize: "1.6rem", borderRadius: "2%", padding: "1rem 3.2rem",boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)" }}
          expires={150} 
          
        >
          <FontAwesomeIcon style={{fontSize: "1.6rem", marginRight: "1.08rem"}} className="icones" icon={faCookieBite} />
          Este site utiliza cookies para melhorar a experiência do usuário. Ao clicar no botão "Aceitar", você concorda com a nossa 
          <a href="" className="policy_link"style={{textDecoration: "none", marginLeft:"1.05rem"}}> Política de Cookies</a>.
        
        </CookieConsent>
      </Container>
    </>
  )
}