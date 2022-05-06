import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

import { Header } from '../header/header';
import { Footer } from '../../pages/footer';
import data from './locations.json'

import {Container} from './styles.js';

import {faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlassMinus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = data
const MapChart = () => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  

  useEffect(() => {
    const divMap = document.querySelector('.rsm-geographies ');

    divMap.addEventListener('drag',(e)=>{
      e.preventDefault()
    })
  })

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  
  

  return (
    <div>
      <Container >
       <Header />
        <main className="aqui"  onLoad={useEffect(() => document.querySelector('#map').scrollIntoView({ behavior: 'smooth' })) }>
          <section className="section section-map" id="map">
            <div className="container">
              <header>
                <h2 className="title">Onde estamos</h2>
                <p>O <strong>Syscare</strong> está presente em todo o Brasil.</p>
              </header>
            <div className="mapSize">
              <div className="controls">
                <div className="glassButtons">
                  <div className="glass-m">
                    <FontAwesomeIcon className="map_glass" icon={faMagnifyingGlassPlus} onClick={handleZoomIn}/>
                  </div>       
                  <div className="glass-m">
                    <FontAwesomeIcon className="map_glass" icon={faMagnifyingGlassMinus} onClick={handleZoomOut} />
                  </div>  
                </div>
              </div>
            <ComposableMap
            
            // projection="geoAzimuthalEqualArea"
            >
              <ZoomableGroup 
              zoom={position.zoom}
              center={position.coordinates}
              onMoveEnd={handleMoveEnd}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map(geo => (
                      <Geography 
                      key={geo.rsmKey} 
                      geography={geo}
                      fill="hsl(var(--color-hue) 36% 57%)"
                      stroke="#444" 
                      />
                    ))
                  }
                  </Geographies>
                  {markers.map(({ name, coordinates, markerOffset }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <g
                      fill="none"
                      stroke="#FF5533"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="translate(-12, -24)"
                    >
                      
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>

                    <text
                      className="mapText"
                      textAnchor="left"
                      y={markerOffset}
                      style={{ fontFamily: "Poppins", fill:'#FFF' }}
                    >
                      {name}
                    </text>
                  </Marker>
                ))}
                </ZoomableGroup>
              </ComposableMap>
              
            </div>
            </div>
          </section>
        </main>
        {/*====  SEPARETOR 1 ====  */}
        <div className="divider-1"></div>
        <Footer />
      </Container>
    </div>
  );
};

export default MapChart;
