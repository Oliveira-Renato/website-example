import { useEffect, useState } from 'react'

import  logo  from '../../images/iconsLogo/logo_syscare_200.png'

import { Footer } from '../../pages/footer';
import './styles.scss'




export function ProcuctTest(){
  
    let dados=[
      {
        'titulo':'produto 1',
        'image' : {logo}
      },
      {
        'titulo':'produto 2',
        'image' : {logo}
      },
      {
        'titulo':'produto 3',
        'image' : 'aaaaaa'
      },
      {
        'titulo':'produto 4',
        'image' : 'aaaaaa'
      },
      {
        'titulo':'produto 5',
        'image' : 'aaaaaa 6'
      },
    ];

    let itemList=[];

    for(let i = 0; i <= dados.length - 1; i++ ){

      itemList.push(<div key={i} className="col">
        {dados[i]['titulo']}
      </div>)

    }
    

    

  return (
    <>  
      <section className="products" >
        <div className="title blackTitle back_title">
            <h2>Produtos</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div> 

        <div className="wrapper">
            
              {itemList}
            
        </div>

      </section>
    <Footer />  
  </>
);

}