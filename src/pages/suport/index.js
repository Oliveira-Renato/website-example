import { Footer } from '../footer';
import { Header } from '../../components/header/header';
import './styles.css';

import logo from '../../assets/suport_Images/Syscare_Logo.jpg';
import kennenLogo from '../../assets/suport_Images/header_kennen.png';

export function Suport() {

    function limpaForm() {
        document.frm_login.usuario.value = '';
        document.frm_login.senha.value = '';
        document.frm_login.usuario.focus();
    }

  return (
    <>
      <main>
      <Header />
        <section className="section" id="suport" >
            <div className="wrapper">
                <div id="formcontent">
                    <h2 className="active">LOGIN</h2>
                    <div className="first">
                        <img className="icon" src={logo} />
                        <form action="http://suporte.syscare.com.br:81/suporte/login" method="post">
                            <input type="text" id="usuario" name="usuario" placeholder="Usuário" />
                            <input type="password" id="senha" name="senha" placeholder="Senha" />
                            <input className="btn" type="submit" value="Entrar" />
                        </form> 
                        <img className="icon icon-2" src={kennenLogo} />
                        <div className="formfooter">
                            <a href="">Esqueceu a senha?</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     <Footer /> 
      </main>
    </>
  )
}