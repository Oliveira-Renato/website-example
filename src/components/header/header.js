import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToggleMenu } from '../ToggleMenu/Toggle'

import  logo  from '../../images/iconsLogo/logo_syscare_200.png'


export function Header(){

  return (
    <>
    {/*====  HEADER/NAV ====  */}
    <header id="header">
        <nav className="container">
          <a href="#" className="logo">
            <img  src={logo} alt="imagem logo syscare" />
          </a>
          <ToggleMenu />

          {/* ==== botão suporte ===== */}
          <div className="suport_btn">
              <a href="http://suporte.syscare.com.br:81/suporte/login" className="button" target="_blank" alt="Botão para suporte">
                <FontAwesomeIcon className="icones" icon={ faSuitcaseMedical } />Suporte
              </a>
          </div>

        </nav>
      </header>
      
    </>
  )
}