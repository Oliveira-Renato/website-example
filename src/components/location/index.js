import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

import { Header } from '../header/header';
import { Footer } from '../../pages/footer';

import data from './locations.json'
import './styles.scss';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = data
const MapChart = () => {
  return (
    <div>
       <Header />
        <main className="aqui">
          <section className="section section-map" id="map">
            <div className="container">
              <header>
                <h2 className="title">Onde estamos</h2>
                <p>O <strong>Syscare</strong> está presente em todo o Brasil.</p>
              </header>
            <div className="mapSize">
              <ComposableMap
            className="mapSize"
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
              rotate: [58, 20, 0],
              scale: 400
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies
                  .filter(d => d.properties.REGION_UN === "Americas")
                  .map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
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
                  textAnchor="left"
                  y={markerOffset}
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {name}
                </text>
              </Marker>
            ))}
              </ComposableMap>
            </div>
            </div>
          </section>
        </main>
      <Footer
        className="footer-map"
      />
    </div>
  );
};

export default MapChart;
