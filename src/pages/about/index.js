import aboutImg from '../../assets/images/home/campaign-creators.jpg'

export function AboutPage(){
  return (
    <>
      <section className="section" id="about" >
          <div className="container grid">
            <div className="image image_about">
              <img src={aboutImg} alt="business meeting with all members teams" />
            </div>
            <div className="text text_about">
              <h2 className="title">Sobre nós</h2>
              <p>
              O <strong>Syscare</strong> é uma empresa de tecnologia da informação que atua no mercado de Home Care.
              </p>
              <br />
              <br />
              <p>
                O <strong>Syscare</strong> tem como objetivo renovar a forma de gestão das empresas desenvolvendo sistemas sob demanda elaborados a partir das necessidades de cada cliente, oferecendo-lhes soluções de gestão de Home Care que atendam aos requisitos de cada empresa.
              </p>
              <br />
              <p>
                Nosso sistema atende de forma ampla as empresas de Home Care, assim como também atua com sistemas de <b>ERP</b> (Enterprise Resource Planning), tais como <i>financeiro</i>, <i>contabilidade</i>, <i>ativo fixo</i>.
              </p>
              <br />
              <p>
              Contando com profissionais que possuem ampla experiência com mais de 20 anos no mercado, o <strong>Syscare</strong> tem sua sede na cidade de Santana de Parnaíba – SP e filial em São Paulo.
              </p>
            </div>
          </div>
      </section>
    </>
  )
}