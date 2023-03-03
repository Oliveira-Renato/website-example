import './styles.scss';

import { Header } from '../../components/header/header';
import { Footer } from '../footer';
import { ContainerRule } from '../regimento/styles';
import lgpdImg from '../../assets/images/home/security.jpg'

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
            <aside>
              <div className="lgpd-img">
                  <img src={lgpdImg} />
                </div>
            </aside>
              <ul className='list-one'>
              <h3>Protocolo de Atendimento</h3>
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

                    <li>
                      <p>Compartilhamento entre os profissionais de saúde e estabelecimentos</p>

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

                    <li>
                      <p>Compartilhamento entre os profissionais de saúde e estabelecimentos</p>

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

                    <li>
                      <p>Compartilhamento entre estabelecimentos de saúde</p>

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

                    <li>
                      <p>Compartilhamento entre estabelecimentos de saúde e ANS (protocolo TISS)</p>

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

                    <li>
                      <p>Compartilhamento entre estabelecimentos de saúde e operadoras</p>

                      <ul className='list-third'>
                        <li>
                          <p>Auditoria</p>
                        </li>
                        <li>
                          <p>Introdução</p>
                        </li>
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

                    <li>
                      <p>Atenção primária à saúde</p>

                      <ul className='list-third'>
                        <li>
                          <p>Introdução</p>
                        </li>
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

                    <li>
                      <p>Protocolo para exercício dos direitos dos titulares</p>

                      <ul className='list-third'>
                        <li>
                          <p>Aspectos gerais</p>
                        </li>
                        <li>
                          <p>Acesso </p>
                        </li>
                        <li>
                          <p>Retificação </p>
                        </li>
                        <li>
                          <p>Cancelamento</p>
                        </li>
                        <li>
                          <p>Oposição</p>
                        </li>
                        <li>
                          <p>Protocolo de Segurança da Informação </p>
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
