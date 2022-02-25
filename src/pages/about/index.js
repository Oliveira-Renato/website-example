import React from 'react';

import { ProgressBar } from '../../components/progressbar';

import mainImg from '../../images/homeImages/5802654.jpg';
import careDoctor from '../../images/homeImages/doctor-taking-care-senior-woman.jpg'
import homeLogo from '../../images/SyscareOld/Drawing.png'

import '../../styles/about/styles.scss'

export function About(){
    return (
      
         <div>
             <section className="about" id="about">
                <div className="title blackTitle back_title img_back">
                    <h2>Nossa Empresa</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 

                
                <div className="content">
                    <div className="about_position">
                      <div className="textBx">
                        <p>
                        O Syscare tem como objetivo renovar a forma de gestão das empresas desenvolvendo sistemas sob demanda, elaborados a partir das necessidades de cada cliente, e oferecendo produtos específicos como o SysCare da massa!
                        </p>

                          <p>
                            Sistema de Gestão de Home Care que atende de forma ampla as empresas de Home Care. Atua, também, com sistemas de ERP (Enterprise Resource Planning), tais como financeiro, contabilidade, ativo fixo.
                          </p>
                          <p>
                            Conta com profissionais com ampla experiência, com mais de 20 anos no mercado, tendo sua sede na cidade de Santana de Parnaíba – SP e filial em São Paulo.
                          </p>
                      </div>
                    </div>
                    {/* Imagem pessoal da pagina sobre */}
                    
                </div>
          </section>                  
        </div>
    )
}