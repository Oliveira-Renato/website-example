import { useEffect, useState } from 'react';

import  logo  from '../../images/iconsLogo/logo_syscare_200.png';

import { Footer } from '../../pages/footer';
import './styles.scss';


import data from './data.json'
import { Card } from 'react-bootstrap';
import { Button } from '../Button';



export function ProductTest(){

  
  console.log(data)

  const newData = data.map((x,index,teste)=>{
    return (
      <Card key ={teste[index]['id']} style={{ width: '18rem' }}>
        <Card.Img src={ logo } />
        <Card.Body>
          <Card.Title>{teste[index]['titulo']}</Card.Title>
          <Card.Text style={{ color: '#333' }}>
            {teste[index]['content']}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  })

  return (
    <div>
        <section className="products">
        <div className="title blackTitle back_title">
            <h2>Produtos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div> 

          <div className="wrapper">         
            {newData}             
          </div>
        </section>
        <Footer />
    </div>
  )
}