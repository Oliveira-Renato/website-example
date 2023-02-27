import { Header } from '../../components/header/header';
import { Footer } from '../footer';

import { ContainerRule } from '../regimento/styles';


export function Etica() {

  return (
    <ContainerRule>
      <Header />
      <main>

        <section className="section" id="codigo-de-etica" >
          <div className="container">
            <header>
              <h2 className="title">Código de Ética:</h2>
            </header>

            <div className="list-new-pattern">
              <ul className='list-one'>
                <li>
                  <p >Pautamos nossa atuação pelos princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência.</p>
                </li>
                <li>
                  <p >Pregamos que a conduta dos nossos funcionários devem fazer somente aquilo que é correto, agir de boa-fé, com integridade e sinceridade nos assuntos que afetam deveres e interesses dos pacientes, familiares, clientes, fornecedores e prestadores, assim como órgãos governamentais.</p>
                </li>
                <li>
                  <p >Os profissionais da instituição (acionistas, funcionários, prestadores e fornecedores) são responsáveis por suas ações e decisões. Independentemente da posição, tornamos responsáveis pela criação de um ambiente transparente, respeitoso e seguro, de forma ética e sustentável.</p>
                </li>
                <li>
                  <p >Transparência nas ações de forma que as informações sejam completas, precisas, claras tanto nas prestações de contas como na tomada de decisão. O sigilo e a confidencialidade das informações permeiam e são exigidos em nossas ações. Qualquer conduta escondida não será considerada ética.</p>
                </li>
                <li>
                  <p >Não toleramos qualquer tipo de preconceito, desrespeito à dignidade, à igualdade, à diversidade e à privacidade das pessoas. O ambiente de trabalho deve ser um local de profissionalismo, em que se respeitam as diferentes culturas e as leis vigentes e ao código de ética desta empresa. Repudiamos condutas que possam caracterizar assédio de qualquer natureza</p>
                </li>
                <li>
                  <p >Repudiamos condutas que possam caracterizar discriminação ou sua indução; coação, perseguição ou constrangimento; desrespeito às atribuições funcionais; desqualificação pública, ofensa ou ameaça.</p>
                </li>
                <li>
                  <p >Esperamos que nossos líderes promovam o desenvolvimento e inspirem suas equipes, estimulando o engajamento e buscando formar sucessores para desafios atuais e futuros, e construam uma relação sólida com os clientes, fornecendo soluções adequadas para eles.</p>
                </li>
                <li>
                  <p >Devemos conduzir processos de licitação, contratação e formalização de acordos, convênios e parcerias com lisura, ética, integridade e imparcialidade.</p>
                </li>
                <li>
                  <p >Proibimos o uso de recursos físicos, tecnológicos, bens e serviços exclusivos ao desempenho de nossas atribuições, para fins particulares.</p>
                </li>
                <li>
                  <p >Devemos adotar ações e procedimentos para prevenir fraudes e ilícitos nos processos licitatórios, na execução e acompanhamento de contratos administrativos ou em interação com o setor público.</p>
                </li>
                <li>
                  <p >Somos transparentes e ágeis no fornecimento de informações, observando regras de sigilo e confidencialidade. Elaboramos demonstrações financeiras em conformidade com a lei, princípios e normas de contabilidade para representar adequadamente o resultado das operações, os fluxos de caixa e a posição patrimonial e financeira da Empresa.</p>
                </li>
                <li>
                  <p >Documentar os direitos e deveres do profissional e manter o sigilo sobre as informações referente aos pacientes e seus familiares;</p>
                </li>
                <li>
                  <p >Dar os limites das relações que o profissional deve ter com colegas, clientes e pacientes;</p>
                </li>
                <li>
                  <p >Explicar a importância de manter o sigilo profissional (essencial em muitos casos);</p>
                </li>
                <li>
                  <p >Defender o respeito aos direitos humanos nas pesquisas científicas e na relação cotidiana;</p>
                </li>
                <li>
                  <p >Delimitar e especificar o uso de publicidade em cada área;</p>
                </li>
                <li>
                  <p >Falar sobre a remuneração e os direitos trabalhistas.</p>
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
