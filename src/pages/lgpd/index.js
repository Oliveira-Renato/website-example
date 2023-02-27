import './styles.scss';

import { Header } from '../../components/header/header';
import { Footer } from '../footer';
import { ContainerRule } from '../regimento/styles';


export function LGPDpage() {
  return (
    <ContainerRule>
      <Header />
        <main>
        <section className="section" id="lgpd" >
          <div className="container">
            <header>
              <h2 className="title">LGPD</h2>
            </header>

            <div className="list-new-pattern">
             <h3>Protocolo de Atendimento</h3>

             <ul className='list-one'>
                <li>
                  <p>Dados Cadastrais</p>
                </li>
                <li>
                  <p>Introdução</p>
                </li>
                <li>
                  <p>Controlador/Operador</p>
                </li>
                <li>
                  <p>Base Legal</p>
                </li>
                <li>
                  <p>Período de armazenamento/ Eliminação</p>

                  <ul className='list-two'>
                    <li>
                      <p>Prontúario médico e consulta</p>

                      <ul className='list-third'>
                        <li>
                          <p>Introdução</p>
                        </li>
                        <li>
                          <p>Controlador/operador</p>
                        </li>
                        <li>
                          <p>Base legal</p>
                        </li>
                        <li>
                          <p>Período de armazenamento/ Eliminação</p>
                        </li>
                        <li>
                          <p>Sigilo/segurança da informação</p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>Exame laboratoriais</p>
                      <ul className='list-third'>
                        <li>
                          <p>Introdução</p>
                        </li>
                        <li>
                          <p>Controlador/operador</p>
                        </li>
                        <li>
                          <p>Base legal</p>
                        </li>
                        <li>
                          <p>Período de armazenamento/ Eliminação</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Aspectos principais</p>

                  <ul className="list-two">
                    <li>
                      <p>Telemedicina</p>

                      <ul className='list-third'>
                        <li>
                          <p>Introdução</p>
                        </li>
                        <li>
                          <p>Controlador/operador</p>
                        </li>
                        <li>
                          <p>Base legal</p>
                        </li>
                        <li>
                          <p>Período de armazenamento/ Eliminação</p>
                        </li>
                        <li>
                          <p>Sigilo/segurança da informação</p>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <p>Protocolo de Compartilhamento</p>
                    </li>
                    <li>
                      <p>Aspectos principais</p>
                    </li>
                    <li>
                      <p>Compartilhamento entre os profissionais de saúde</p>

                      <ul className='list-third'>
                        <li>
                          <p>Introdução</p>
                        </li>
                        <li>
                          <p>Controlador/operador</p>
                        </li>
                        <li>
                          <p>Base legal</p>
                        </li>
                        <li>
                          <p>Período de armazenamento/ Eliminação</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
             </ul>

            </div>
          </div>
        </section>
        </main>

        {/*====  SEPARETOR 1 ====  */}
        <div className="divider-1"></div>

      {/*====  SEPARETOR 1 ====  */}
      <div className="divider-1"></div>
      <Footer />
    </ContainerRule>
  )
}
