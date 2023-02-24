import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

import { Header } from '../../components/header/header';
import { Footer } from '../footer';
import { useEffect } from 'react';


export function Etica() {

  return (
    <div>
      <Header />

        <main>

        <section className="section" id="codigo-de-etica" >
          <div className="container">
            <header>
              <h2 className="title">Regimento Interno</h2>
              <p>Assistência médica domiciliar personalizada e humanizada.</p>
            </header>

            <div className="list-new-pattern">
              <ul>
                <li>
                  <p>Objetivo: Possuir um regimento interno que defina o tipo de atenção domiciliar prestada e as diretrizes básicas que norteiam seu funcionamento. O SAD deve ter o manual e normas técnicas de procedimentos para a atenção domiciliar, de acordo com a especificidade da assistência a ser prestada.A atenção domiciliar deve ser indicada pelo profissional responsável pelo paciente e que desdobra toda a gestão clínica e administrativa para a equipe multidisciplinar.Todas as informações do cuidado devem ser encaminhadas ao SAD através de relatório detalhado sobre as condições de saúde e doença do paciente contendo histórico, prescrições, exames e intercorrências.</p>
                </li>
              </ul>

              

              <ul>
                <li>
                  <p>Definições:</p>

                  <ul>
                    <li>
                      <p>Admissão em Atenção domiciliar: processo que se caracteriza pelas seguintes etapas: indicação, elaboração do Plano de Atenção Domiciliar e início da prestação da assistência ou internação domiciliar.&nbsp;</p>
                    </li>
                    <li>
                      <p>Alta da Atenção domiciliar: ato que determina o encerramento da prestação de serviços de atenção domiciliar em função de: internação hospitalar, alcance da estabilidade clínica, cura, a pedido do paciente e/ou responsável, óbito.</p>
                    </li>
                    <li>
                      <p>Atenção domiciliar: termo genérico que envolve ações de promoção à saúde, prevenção, tratamento de doenças e reabilitação desenvolvidas em domicílio.</p>
                    </li>
                    <li>
                      <p>Assistência domiciliar: conjunto de atividades de caráter ambulatorial, programadas e continuadas desenvolvidas em domicílio.</p>
                    </li>
                    <li>
                      <p>Cuidador: pessoa com ou sem vínculo familiar capacitada para auxiliar o paciente em suas necessidades e atividades da vida cotidiana.</p>
                    </li>
                    <li>
                      <p>Equipe Multiprofissional de Atenção Domiciliar - EMAD: profissionais que compõem a equipe técnica da atenção domiciliar, com a função de prestar assistência clínico-terapêutica e psicossocial ao paciente em seu domicílio.</p>
                    </li>
                    <li>
                      <p>Internação Domiciliar: conjunto de atividades prestadas no domicílio, caracterizadas pela atenção em tempo integral ao paciente com quadro clínico mais complexo e com necessidade de tecnologia especializada.</p>
                    </li>
                    <li>
                      <p>Plano de Atenção Domiciliar - PAD: documento que contempla um conjunto de medidas que orienta a atuação de todos os profissionais envolvidos de maneira direta e ou indireta na assistência a cada paciente em seu domicílio desde sua admissão até a alta.</p>
                    </li>
                    <li>
                      <p>Serviço de Atenção Domiciliar - SAD: instituição pública ou privada responsável pelo gerenciamento e operacionalização de assistência e/ou internação domiciliar.</p>
                    </li>
                    <li>
                      <p>Tempo de Permanência: período compreendido entre a data de admissão e a data de alta ou óbito do paciente.</p>
                    </li>
                  </ul>
                </li>
              </ul>

              

              <ul>
                <li>
                  <p>Condições Gerais do regimento do SAD</p>

                  <ul>
                    <li>
                      <p>O SAD deve possuir alvará expedido pelo órgão sanitário competente.</p>
                    </li>
                    <li>
                      <p>O SAD deve possuir como responsável técnico um profissional de nível superior da área da saúde, habilitado junto ao respectivo conselho profissional.</p>
                    </li>
                    <li>
                      <p>O SAD deve estar inscrito no Cadastro Nacional de Estabelecimentos de Saúde - CNES.</p>
                    </li>
                    <li>
                      <p>O SAD deve possuir um regimento interno que defina o tipo de atenção domiciliar prestada e as diretrizes básicas que norteiam seu funcionamento.</p>
                    </li>
                    <li>
                      <p>O SAD deve elaborar manual e normas técnicas de procedimentos para a atenção domiciliar, de acordo com a especificidade da assistência a ser prestada.</p>
                    </li>
                    <li>
                      <p>A atenção domiciliar deve ser indicada pelo profissional de saúde que acompanha o paciente.</p>
                    </li>
                    <li>
                      <p>O profissional de saúde que acompanha o paciente deve encaminhar ao SAD relatório detalhado sobre as condições de saúde e doença do paciente contendo histórico, prescrições, exames e intercorrências.</p>
                    </li>
                    <li>
                      <p>O registro dos pacientes em atenção domiciliar e o PAD devem ser mantidos pelo SAD.</p>
                    </li>
                    <li>
                      <p>O SAD deve manter um prontuário domiciliar com o registro de todas as atividades realizadas durante a atenção direta ao paciente, desde a indicação até a alta ou óbito do paciente.</p>
                    </li>
                    <li>
                      <p>O prontuário domiciliar deve conter identificação do paciente, prescrição e evolução multiprofissional, resultados de exames, descrição do fluxo de atendimento de Urgência e Emergência, telefones de contatos do SAD e orientações para chamados.</p>
                    </li>
                    <li>
                      <p>O prontuário deve ser preenchido com letra legível e assinado por todos os profissionais envolvidos diretamente na assistência ao paciente.</p>
                    </li>
                    <li>
                      <p>Após a alta ou óbito do paciente o prontuário deve ser arquivado na sede do SAD, conforme legislação vigente.</p>
                    </li>
                    <li>
                      <p>O SAD deve garantir o fornecimento de cópia integral do prontuário quando solicitado pelo paciente ou pelos responsáveis legais.</p>
                    </li>
                    <li>
                      <p>O SAD deve fornecer aos familiares dos pacientes e/ou cuidadores orientações verbais e escritas, em linguagem clara, sobre a assistência a ser prestada, desde a admissão até a alta.</p>
                    </li>
                    <li>
                      <p>O SAD deve prover por meio de recursos próprios ou terceirizados, profissionais, equipamentos, materiais e medicamentos de acordo com a modalidade de atenção prestada e o perfil clínico do paciente.</p>
                    </li>
                    <li>
                      <p>O SAD deve observar, como critério de inclusão para a internação domiciliar, se o domicílio dos pacientes conta com suprimento de água potável, fornecimento de energia elétrica, meio de comunicação de fácil acesso, facilidade de acesso para veículos e ambiente com janela, específico para o paciente, com dimensões mínimas para um leito e equipamentos.</p>
                    </li>
                    <li>
                      <p>O SAD deve controlar o abastecimento domiciliar de equipamentos, materiais e medicamentos conforme prescrição e necessidade de cada paciente, assim como meios para atendimento a solicitações emergenciais.</p>
                    </li>
                    <li>
                      <p>O SAD deve assegurar o suporte técnico e a capacitação dos profissionais envolvidos na assistência ao paciente.</p>
                    </li>
                    <li>
                      <p>O SAD deve estabelecer contrato formal, quando utilizar serviços terceirizados, sendo que estes devem ter obrigatoriamente Alvará Sanitário atualizado.</p>
                    </li>
                    <li>
                      <p>O SAD deve elaborar e implementar um Programa de Prevenção e Controle de Infecções e Eventos Adversos (PCPIEA) visando a redução da incidência e da gravidade desses eventos.</p>
                    </li>
                    <li>
                      <p>O SAD deve possuir sistema de comunicação que garanta o acionamento da equipe, serviços de retaguarda, apoio ou suporte logístico em caso de urgência e emergência.</p>
                    </li>
                    <li>
                      <p>O SAD deve garantir aos pacientes que estão em regime de internação domiciliar, a remoção ou retorno à internação hospitalar nos casos de urgência e emergência.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Missão, Visão e Valores</p>

                  <ul>
                    <li>
                      <p>Missão: Ter um modelo padronizado de gestão e operação com critérios de monitoramento, com entrega de qualidade no atendimento aos pacientes e familiares.</p>
                    </li>
                    <li>
                      <p>Visão: Disponibilizar para o mercado nosso conhecimento, expertise, qualidade, tratamento humanizado com o paciente e sua família, reduzindo os custos e desperdícios para as fontes pagadoras;</p>
                    </li>
                    <li>
                      <p>Valores:Buscar mecanismos ou princípios que regem nosso processo decisório baseado no código de ética, conjunto de regras que visam minimizar os riscos e buscar o equilíbrio econômico-financeiro;</p>
                    </li>
                  </ul>
                </li>
              </ul>

              

              <ul>
                <li>
                  <p>Critérios de elegibilidade do atendimento</p>

                  <ul>
                    <li>
                      <p>Para receber o atendimento em casa, alguns critérios são avaliados pela equipe multidisciplinar antes da aprovação do pedido de internação domiciliar</p>
                    </li>
                    <li>
                      <p>Facilidade de acesso para veículos e ambulâncias;</p>
                    </li>
                    <li>
                      <p>paciente estável que necessite de supervisão médica e de enfermagem para completar o tratamento;</p>
                    </li>
                    <li>
                      <p>finalização de terapias injetáveis;</p>
                    </li>
                    <li>
                      <p>cuidados paliativos (pacientes terminais em uso de analgesia);</p>
                    </li>
                    <li>
                      <p>presença de acompanhante;</p>
                    </li>
                    <li>
                      <p>realização de curativos complexos;</p>
                    </li>
                    <li>
                      <p>utilização de nutrição parenteral total;</p>
                    </li>
                    <li>
                      <p>portadores de doenças crônicas em períodos de descompensação aguda que não tenha instabilidade grave;</p>
                    </li>
                    <li>
                      <p>infecções prolongadas e reincidentes;</p>
                    </li>
                    <li>
                      <p>aprovação de paciente e família em relação às regras da assistência domiciliar;</p>
                    </li>
                    <li>
                      <p>treinamento de cuidador, familiar ou paciente (em casos de novas condições, necessidades ou limitações);</p>
                    </li>
                    <li>
                      <p>compatibilidade da residência para o atendimento (energia elétrica, água potável, ambiente arejado, fácil acesso para comunicação).</p>
                    </li>
                  </ul>
                </li>
              </ul>

              

              <ul>
                <li>
                  <p>Critérios de inelegibilidade do atendimento</p>

                  <ul>
                    <li>
                      <p>As situações em que a internação residencial é imediatamente contraindicada, são: instabilidade clínica do paciente, terapia de natureza cirúrgica ou inviável em domicílio, ausência de cuidador ou familiar, domicílio sem estrutura mínima, não aprovação da equipe médica ou do paciente/família, pacientes com moléstias agudas sem diagnóstico.</p>
                    </li>
                  </ul>
                </li>
              </ul>

              

              <ul>
                <li>
                  <p>Modalidades, Equipes e Funções</p>

                  <ul>
                    <li>
                      <p>A modalidade de atenção domiciliar descrito neste regimento é o conjunto de atividades desenvolvidas no domicílio em função da complexidade assistencial e avaliação socioambiental realizado pela equipe multiprofissional classificando a complexidade do paciente.&nbsp;</p>
                    </li>
                    <li>
                      <p>Equipes: As equipes são formadas por equipes multidisciplinares próprias ou terceiros: Médico (a); Enfermeiro (a); Téc. Enfermagem; Auxiliar Enfermagem; Fisioterapeuta; Nutricionista; Administrativo; Fonoaudiólogo (a); Psicólogo (a);</p>
                    </li>
                    <li>
                      <p>Funções: O SAD pode ser composto de visitas periódicas dos profissionais de saúde ou acompanhamento intensivo, avaliando a evolução do tratamento, abaixo, as principais atribuições das funções dos profissionais envolvidos no PAD:</p>
                    </li>
                    <li>
                      <p>Médicos: Fazem visitas na casa de pacientes acamados ou que necessitam tratamento intensivo. Os serviços domiciliares mais comumente prestados pelos médicos são:</p>
                    </li>
                  </ul>
                </li>
              </ul>

              

              <ul>
                <li>
                  <p>Consulta</p>

                  <ul>
                    <li>
                      <p>O atendimento pode ser de rotina, para pacientes acamados, ou de urgência, nos chamados a qualquer hora.</p>
                    </li>
                    <li>
                      <p>&nbsp;Realização de exames. Nesses casos, é normal o médico comparecer à residência acompanhado de um técnico em enfermagem, que coleta exames de sangue ou faz testes simples de diagnóstico na beira do leito.</p>
                    </li>
                    <li>
                      <p>Monitoramento remoto é indicado para pacientes que necessitam acompanhamento constante, a exemplo daqueles que adquiriram sequelas após eventos como o AVC (acidente vascular cerebral), infartados, ou debilitados.</p>
                    </li>
                    <li>
                      <p>Pessoas com doenças crônicas, como diabetes, também se beneficiam do monitoramento remoto, que pode incluir registros de Glicemia, Pressão arterial, Frequência cardíaca, Saturação de oxigênio, Apoio fisioterápico e fonoaudiológico a distância, Atendimento psicológico a distância, esta tarefa é executada com o apoio da telessaúde, que transmite as informações para uma central capaz de monitorar os pacientes em tempo real.</p>
                    </li>
                    <li>
                      <p>Enfermeiro: O enfermeiro que atua em home care, assim como os outros profissionais, tem função assistencial e educativa. Seu trabalho vai desde a elaboração da SAE (Sistematização da Assistência de Enfermagem) até procedimentos de maior complexidade. Esse atendimento proporciona conforto e segurança para o paciente e tranquilidade para os familiares. Além dos cuidados, o enfermeiro estimula uma maior participação de todos os envolvidos com o enfermo. O profissional também é responsável pela educação do paciente e família, ensinando-os sobre procedimentos e ações em parceria com a equipe multidisciplinar, que proporcionem o bem-estar e qualidade de vida, como acessibilidade, adaptação de ambientes e outras. Ao realizar visitas domiciliares de rotina para os pacientes, o enfermeiro é responsável em realizar:</p>
                    </li>
                    <li>
                      <p>avaliação clínica e evolução do paciente;</p>
                    </li>
                    <li>
                      <p>orientação da família cuidadores;</p>
                    </li>
                    <li>
                      <p>análise de atendimento;</p>
                    </li>
                    <li>
                      <p>controle medicamentoso;</p>
                    </li>
                    <li>
                      <p>análise de equipamentos e mobiliário;</p>
                    </li>
                    <li>
                      <p>procedimentos privativos;</p>
                    </li>
                    <li>
                      <p>avaliação de lesões e integridade da pele;</p>
                    </li>
                    <li>
                      <p>curativos complexos;</p>
                    </li>
                    <li>
                      <p>controle de oxigenoterapia;</p>
                    </li>
                    <li>
                      <p>cuidados paliativos (quando necessário).</p>
                    </li>
                    <li>
                      <p>Terapeuta Ocupacional: Tem como intenção reincorporar o indivíduo à sociedade após alguma enfermidade. Ele é responsável em auxiliar o paciente na recuperação de sequelas, lesões e outros problemas físicos, melhorando seu condicionamento e prevenindo complicações por meio de atividades e exercícios.</p>
                    </li>
                    <li>
                      <p>Psicólogo: o atendimento domiciliar envolve orientações à família ou responsável pelos cuidados que foram prescritos ao indivíduo, avaliando as necessidades de atendimento, psicoterapia para paciente e cuidador, além de intervenções psicológicas quando necessário. O papel desse profissional inclui compreender e traduzir os ideais do paciente em relação a seu processo, e interpretar para a equipe de saúde, facilitando o relacionamento.</p>
                    </li>
                    <li>
                      <p>Nutricionista: A terapia nutricional domiciliar é fundamental para o início da adaptação necessária sobre a oferta de alimentos, avaliando o estado nutricional, e acompanhando sua evolução. Acompanha e desenvolve dietoterapia para determinadas patologias, como em pacientes traqueostomizados, em antibioticoterapia, com transtornos de deglutição, digestão, disfagia e que utilizam outras vias de alimentação, como sondas nasoenterais e ostomias. Tudo isso considerando os fatores culturais e socioeconômicos.</p>
                    </li>
                    <li>
                      <p>Fonoaudiólogo: Atender indivíduos com disfagias mecânicas (causadas por alterações orgânicas no trato digestivo) e neurogênicas (causadas por alterações neurológicas). É responsável também pela realização de estímulos para minimizar os efeitos de transtornos como paralisia facial, respiração oral, mastigação ineficiente, deglutição atípica e outros. Ainda, realiza terapias para afasias, alterações e atraso na linguagem, avaliação e terapia da voz e da articulação, acompanhamento de alterações auditivas e adaptação de próteses.</p>
                    </li>
                    <li>
                      <p>Fisioterapeuta: Reabilitar, reeducar e prevenir deformidades ósseas e articulares para que o paciente possa voltar o quanto antes para suas atividades de vida diária. Além disso, a fisioterapia home care ajuda a promover inclusão, melhorar a qualidade de vida, preservar ou recuperar a saúde do paciente.</p>
                    </li>
                    <li>
                      <p>Administrativo: é responsável por dar suporte às tarefas administrativas de uma empresa ou organização, planejamento, coordenar as atividades referentes ao atendimento, organização de planilhas e estoques, elaboração de documentos, monitoramento de gastos e auxílio em compras, recebimento, pagamentos, entregas, além de criar relatórios específicos para controles da organização.</p>
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                </li>
                <li>
                  <p>PAD – Plano de Atenção Domiciliar</p>

                  <ul>
                    <li>
                      <p>A equipe do SAD deve elaborar um Plano de Atenção Domiciliar - PAD.</p>
                    </li>
                    <li>
                      <p>O PAD deve contemplar:</p>

                      <ul>
                        <li>
                          <p>a prescrição da assistência clínico-terapêutica e psicossocial para o paciente;</p>
                        </li>
                        <li>
                          <p>requisitos de infraestrutura do domicílio do paciente, necessidade de recursos humanos, materiais, medicamentos, equipamentos, retaguarda de serviços de saúde, cronograma de atividades dos profissionais e logística de atendimento;</p>
                        </li>
                        <li>
                          <p>o tempo estimado de permanência do paciente no SAD considerando a evolução clínica, superação de déficits, independência de cuidados técnicos e de medicamentos, equipamentos e materiais que necessitem de manuseio continuado de profissionais;</p>
                        </li>
                        <li>
                          <p>a periodicidade dos relatórios de evolução e acompanhamento.</p>
                        </li>
                        <li>
                          <p>o PAD deve ser revisado de acordo com a evolução e acompanhamento do paciente e a gravidade do caso.</p>
                        </li>
                        <li>
                          <p>a revisão do PAD deve conter data, assinatura do profissional de saúde que acompanha o paciente e do responsável técnico do SAD.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

              

              <ul>
                <li>
                  <p>Atribuições da equipe</p>

                  <ul>
                    <li>
                      <p>A equipe operacional do PAD é a responsável pelo funcionamento efetivo do programa, acompanhar e auditar os beneficiários incluídos no PAD, através da análise técnica de pareceres, laudos, relatórios médicos e/ou demais documentos e visitas técnicas domiciliares.</p>
                    </li>
                    <li>
                      <p>Avaliar permanentemente o serviço prestado pelo SAD através de um acompanhamento sistemático dos dados e indicadores estipulados; - Estar sempre atualizado no que se refere à legislação sobre atenção domiciliar, propondo alterações na dinâmica e rotina do serviço sempre que necessário.</p>
                    </li>
                  </ul>
                </li>
              </ul>

              

              <ul>
                <li>
                  <p>Cancelamento dos Serviços</p>

                  <ul>
                    <li>
                      <p>Os serviços domiciliares cessarão quando ocorrer uma das seguintes situações:</p>
                    </li>
                    <li>
                      <p>Alta médica da assistência domiciliar;</p>
                    </li>
                    <li>
                      <p>Término do prazo estabelecido no PAD;</p>
                    </li>
                    <li>
                      <p>&nbsp;Necessidade de reiteração hospitalar por agravamento do caso;</p>
                    </li>
                    <li>
                      <p>&nbsp;Óbito do paciente;</p>
                    </li>
                    <li>
                      <p>&nbsp;Descumprimento das normas que regem este regimento;</p>
                    </li>
                    <li>
                      <p>&nbsp;Solicitação da família ou exclusão do beneficiário pela fonte pagadora;</p>
                    </li>
                    <li>
                      <p>Caberá ao responsável em assumir integralmente o atendimento, incluindo às custas, operação e riscos voltados ao paciente;</p>
                    </li>
                  </ul>
                </li>
              </ul>

              <p><span>*****</span></p>

              <ul>
                <li>
                  <p>Medidas Disciplinares</p>

                  <ul>
                    <li>
                      <p>Todos os envolvidos neste regimente que cometerem atos que constituam infração às normas constantes a este regimento, código de ética, compliance ou alguma ação ilegal terão seus serviços de atenção domiciliar cancelados, podendo ser aplicado os recursos jurídicos necessários para autuação.</p>
                    </li>
                    <li>
                      <p>Caberá ao cliente ou responsável indenizar a Bessa Care por eventuais perdas ou danos aos materiais, equipamentos utilizados durante aos atendimentos descritos neste regimento, onde fica estabelecido o compromisso de ressarcir, num prazo máximo de 30 dias corridos.</p>
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
    </div>
  )
}
