import './styles.scss';

import { Header } from '../../components/header/header';
import { Footer } from '../footer';
import { ContainerRule } from '../regimento/styles';

export function Legislacao() {

  return (
    <ContainerRule>
      <Header />
      <main>
        <section className="section" id="legislacao" >
          <div className="container">
            <header>
              <h2 className="title">Legislação</h2>
              <p>Assistência médica domiciliar personalizada e humanizada.</p>
            </header>

            <div className="list-new-pattern">

              <ul className='list-one'>
                <li>
                  <p >Resolução CFM nº 1.668, de 03 de junho de 2003, disponível no site do Conselho Federal de Medicina – CFM dispõe sobre as normas técnicas necessárias à assistência domiciliar de pacientes, definindo as responsabilidades do médico, do hospital, das empresas públicas e privadas, assim como a interface multiprofissional neste tipo de assistência.</p>
                </li>
              </ul>

              <ul className='list-one' >
                <li>
                  <p >Resolução RDC nº 11, de 26 de janeiro de 2006, publicada pela Agência Nacional de Vigilância Sanitária – ANVISA. Ela regulamenta as regras para o funcionamento de serviços de saúde que prestam assistência em domicílios.</p>
                </li>
              </ul>

              <ul className='list-one' >
                <li>
                  <p >Resolução COFEN nº 270 de 18 de abril de 2002, disponível no site do Conselho Federal de Enfermagem, aprova a Regulamentação das empresas que prestam Serviços de Enfermagem Domiciliar - HOME CARE, dispõe em seu anexo que toda empresa de prestação de serviços de Enfermagem Domiciliar, deve ser dirigida por Profissional Enfermeiro devidamente inscrito e em dia com suas obrigações junto ao Conselho Regional de sua área de atuação.</p>
                </li>
              </ul>

              <ul className='list-one' >
                <li>
                  <p >Resolução RDC nº 306, de 07 de dezembro de 2004, publicada pela Agência Nacional de Vigilância Sanitária – ANVISA, que dispõe sobre o Regulamento Técnico para o gerenciamento de resíduos de serviços de saúde.</p>
                </li>
              </ul>

              <ul className='list-one' >
                <li>
                  <p >Entre outras que completam os serviços de assistência domiciliar.</p>
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
