import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

import { Header } from '../../components/header/header';
import { Footer } from '../footer';
import { useEffect } from 'react';
import { ContainerRule } from '../regimento/styles';


export function Compliance() {

  return (
    <ContainerRule>
      <Header />
      <main>

        <section className="section" id="compliance" >
          <div className="container">
            <header>
              <h2 className="title">Compliance</h2>
              <p>BessaCare - Assistência médica domiciliar personalizada e humanizada.</p>
            </header>

            <div className="list-new-pattern">
              <details>
                Essa palavra inglesa vem do verbo to comply, e significa “agir conforme uma regra”. Assim, a companhia que segue um programa de compliance busca atuar de acordo com as leis vigentes no país e com o regulamento interno.
              </details>

              <ul className='list-one'>
                <li>
                  <p>O objetivo é que todos na empresa — funcionários, gestores, parceiros ou fornecedores — ajam conforme as regras direcionadas ao seu segmento de atuação, nos mais diversos setores e atividades da companhia, como:</p>

                  <ul className='list-two'>
                    <li>
                      <p >segurança do trabalho;</p>
                    </li>
                    <li>
                      <p >atividades operacionais;</p>
                    </li>
                    <li>
                      <p >departamento contábil e fiscal;</p>
                    </li>
                    <li>
                      <p >processos trabalhistas;</p>
                    </li>
                    <li>
                      <p >responsabilidade ambiental.</p>
                    </li>
                  </ul>
                </li>
                <p >Assim, para garantir que os processos estejam em harmonia com as leis, é preciso construir um regulamento interno — ou um código de conduta — que paute questões éticas e procedimentais.</p>
              </ul>



              <ul className='list-one'>
                <li>
                  <p>Os principais objetivos e responsabilidades desse programa são:</p>
                

                <ul className='list-two'>
                  <li>
                    <p >fazer um levantamento detalhado dos riscos a que o negócio está sujeito — especialmente em relação às leis, como questões ambientais, trabalhistas, licitatórios etc.;</p>
                  </li>
                  <li>
                    <p >administrar controles internos, como normas e procedimentos alistados no regulamento da empresa;</p>
                  </li>
                  <li>
                    <p >implementar estratégias de aprimoramento, principalmente nas normas já definidas;</p>
                  </li>
                  <li>
                    <p >avaliar o potencial de fraudes e preveni-las;</p>
                  </li>
                  <li>
                    <p >Realizar&nbsp;<a href="https://fsense.com/pt/blog/auditoria-de-compliance-entenda-o-que-deve-fazer-parte-e-como-fazer/" target="_blank" rel="noreferrer noopener">auditorias de compliance</a>;</p>
                  </li>
                  <li>
                    <p >elaborar programas para divulgar uma cultura de ética e respeito às leis;</p>
                  </li>
                  <li>
                    <p >conhecer e aplicar as normas à realidade da empresa.</p>
                  </li>

                </ul>
                </li>
              </ul>

              <ul className='list-one'>
                <li>
                  <p>Para alcançar esses objetivos, o programa de compliance utiliza uma série de ferramentas que garantem a transparência e a legalidade dos processos, a apuração das irregularidades e a punição dos envolvidos em escândalos e problemas com a justiça. Entre esses instrumentos, estão incluídos:</p>
                
                <ul className='list-two'>
                  <li>
                    <p >canal de denúncias;</p>
                  </li>
                  <li>
                    <p >treinamento dos funcionários;</p>
                  </li>
                  <li>
                    <p >códigos de conduta.!</p>
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
    </ContainerRule >
  )
}
