/* ===== ICONES ===== */
import {
  faSuitcaseMedical
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SupportButton() {

  return (
      <>  
        {/* ==== botão suporte ===== */}
        <div className="suport_btn">
          <a href="http://suporte.syscare.com.br:81/suporte/login" className="button" target="_blank" alt="Botão para suporte">
            <FontAwesomeIcon className="icones" icon={ faSuitcaseMedical } />Suporte
          </a>
        </div>
      </>
  )
}