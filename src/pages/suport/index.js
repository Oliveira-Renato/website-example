import { Footer } from '../footer';
import { Header } from '../../components/header/header';
// import './styles.css';

import logo from '../../assets/images/suport/Syscare_Logo.png';
import kennenLogo from '../../assets/images/suport/header_kennen.png';

export function Suport() {

    function HandleCleanInputs() {
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
                <div id="formcontent" onLoad={HandleCleanInputs}>
                    <h2 className="active">LOGIN</h2>
                    <div className="first">
                        <img className="icon" src={logo} />
                        <form name="frm_login" action="http://suporte.syscare.com.br:81/suporte/login" method="POST">
                            <label htmlFor="Usuário"></label>
                            <input type="text" id="usuario" name="usuario" placeholder="Usuário" />
                            <label htmlFor="Senha"></label>
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