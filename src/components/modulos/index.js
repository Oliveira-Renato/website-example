import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dataJson from './data.json';
import contentModal from './contentModal.json';

import UseMapData from "../../hooks/map/Map";

import {ContainerMod} from "./styles";

import { ModalComponent } from "../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: 'red'}}
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
    className:"minha",
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 100,
            fade: true,
          }
        }
      ]
  };
  

  return (
    <div>
      <ContainerMod>
      <main>
        <section className="section section_mod" id="modules">
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
                <div className="card_space" key={array[index]['id']} >
                  <div className="card" >  
                    <div className="icones">
                        <FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[array[index]['image']]} />
                      </div>
          
                    <h3 className="title">Syscare - {array[index]['titulo']}</h3>
                    <p className="ola">
                      {array[index]['content']}
                    </p>
                    <ModalComponent jsonData={ contentModal[index]} jsonId={array[index]['id']} />
                  </div>
                </div>
              ))} 
            </ Slider>
            
            
          </div>
        </section>
      </main>
      </ContainerMod>
    </div>
  )
}