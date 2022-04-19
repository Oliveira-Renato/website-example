import { Footer } from '../footer';
import { Header } from '../../components/header/header';
import {Container} from './styles.js';

import logo from '../../assets/images/suport/Syscare_Logo.png';
import kennenLogo from '../../assets/images/icons/header_kennen.png';

import useValidaUrl from '../../hooks/ValidaUrl';

export function Suport() {
    const wSuportUrl = 'http://suporte.syscare.com.br:81/suporte/login'

    function HandleCleanInputs() {
        document.frm_login.usuario.value = '';
        document.frm_login.senha.value = '';
        document.frm_login.usuario.focus();
    }

    function handleSubmitForms(event){
        event.preventDefault();
    }

  return (
    <>
     <Container>
        <main>
            <Header />
                <section className="section section_suport" id="suport" onLoad={()=>document.querySelector('#suport').scrollIntoView({ behavior: 'smooth' })} >
                    <div className="wrapper">
                        <div id="formcontent" onLoad={HandleCleanInputs}>
                            <h2 className="active">LOGIN</h2>
                            <div className="first">
                                <img className="icon" src={logo} />
                                <form name="frm_login" action={ useValidaUrl(wSuportUrl) ? wSuportUrl : '' } method="POST" >
                                    <label htmlFor="Usuário"></label>
                                    <input type="text" id="usuario" name="usuario" placeholder="Usuário" />
                                    <label htmlFor="Senha"></label>
                                    <input type="password" id="senha" name="senha" placeholder="Senha" />
                                    <input className="btn" type="submit" value="Entrar" />
                                </form> 
                                <img className="icon icon-2" src={kennenLogo} />
                                <div className="formfooter" id="blabla">
                                    <a href="">Esqueceu a senha?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        <Footer /> 
      </Container>
    </>
  )
}