import { useEffect, useState } from 'react';


import './styles.scss';


import data from './data.json'
import { Card } from 'react-bootstrap';
import { Header } from '../header/header';
import { Footer } from '../../pages/footer';



export function ProductTest(){

  
  console.log(data)

  const newData = data.map((x,index,teste)=>{
    return (
      
      <Card key ={teste[index]['id']} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{teste[index]['titulo']}</Card.Title>
          <Card.Text style={{ color: '#333' }}>
            {teste[index]['content']}
          </Card.Text>
          <button>Go somewhere</button>
        </Card.Body>
      </Card>
    )
  })

  return (
    <div>
      <Header />
       
        <section className="section" id="products">
          <div className="container grid">
            <header>
              <h2 className="title">Produtos</h2>
              <p>Com mais de 20 anos no mercado, o <strong>Syscare</strong> já
                conquistou inúmeros  clientes com seus serviços
                exclusivos.
                </p>
            </header>
            <div className="wrapper">         
              {newData}             
            </div>
          
          </div>
        </section>
        <Footer />
    </div>
  )
}