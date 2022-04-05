import aboutImg from '../../images/homeImages/campaign-creators.jpg'

export function AboutPage(){
  return (
    <>
      <section className="section" id="about" >
          <div className="container grid">
            <div className="image image_about">
              <img src={aboutImg} alt="" />
            </div>
            <div className="text">
              <h2 className="title">Sobre nós</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
              <br />
              <br />
              <p>
                O Syscare tem como objetivo renovar a forma de gestão das empresas desenvolvendo sistemas sob demanda, elaborados a partir das necessidades de cada cliente, e oferecendo produtos específicos como o SysCare da massa!
              </p>
              <br />
              <p>
                Sistema de Gestão de Home Care que atende de forma ampla as empresas de Home Care. Atua, também, com sistemas de ERP (Enterprise Resource Planning), tais como financeiro, contabilidade, ativo fixo.
              </p>
              <br />
              <p>
                Conta com profissionais com ampla experiência, com mais de 20 anos no mercado, tendo sua sede na cidade de Santana de Parnaíba – SP e filial em São Paulo.
              </p>
            </div>
          </div>
      </section>
    </>
  )
}