import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dataJson from './data.json';
import UseMapData from "../../hooks/map/Map";
import { ModalComponent } from "../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
      
  );
}

function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "block", background: "red" }}
    onClick={onClick}
  />
  );
}

export function ModulesComponent() {
  const data = dataJson;

  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      // nextArrow: <SampleNextArrow />, 
      // prevArrow: <SamplePrevArrow />,
  };


  return (
    <div>
      <main>
        <section className="section" id="modules">
          <div className="container">
            <header>
              <h2 className="title">Módulos</h2>
              <p>Com mais de 20 anos no mercado, o <strong>Syscare</strong> já
                conquistou inúmeros  clientes com seus serviços
                exclusivos.
              </p>
            </header>
            
            <Slider {...settings}>
              {data.map((item, index,array) => (
                <div className="card" key={array[index]['id']}>
                   <div className="icones">
                    <FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[array[index]['image']]} />
                  </div>
        
                  <h3 className="title">Syscare - {array[index]['titulo']}</h3>
                  <p>
                    {array[index]['content']}
                  </p>
                  <ModalComponent productId={array[index]['id']} />
                </div>
              ))} 
            </ Slider>
            
            
          </div>
        </section>
      </main>
    </div>
  )
}