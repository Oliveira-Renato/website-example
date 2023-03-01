import aboutImg from '../../assets/images/home/12.jpg'

export function AboutPage(){
  return (
    <>
      <section className="section" id="about" >
          <div className="container grid">
            <div className="image image_about">
              <img src={aboutImg} alt="business meeting with all members teams" />
            </div>
            <div className="text text_about">
              <h2 className="title">Quem Somos</h2>
              <ul>
                <li>
                  <p>Foco no tratamento humanizado e na segurança do paciente;</p>
                </li>
                <li>
                  <p>Trabalharmos constantemente para sermos único como carinho de família.​</p>
                </li>
                <li>
                  <p>Padronizar os processos e fazer com que tudo siga parâmetros bem definidos utilizando a tecnologia e equipamentos de ponta;</p>
                </li>
                <li>
                  <p>Disponibilizar para o mercado nosso conhecimento, expertise, qualidade, tratamento humanizado com o paciente e sua família, reduzindo os custos e desperdício.</p>
                </li>
                <li>
                  <p>Treinamento das pessoas e seleção dos melhores profissionais;</p>
                </li>
                <li>
                  <p>Modelo padronizado de gestão e operação com critérios de monitoramento, com entrega de qualidade no atendimento aos pacientes e familiares;</p>
                </li>
                <li>
                  <p>Padronizar os processos e fazer com que tudo siga parâmetros bem definidos utilizando a tecnologia e equipamentos de ponta;</p>
                </li>
              </ul>
            </div>
          </div>
      </section>
    </>
  )
}