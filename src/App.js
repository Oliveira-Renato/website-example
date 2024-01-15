import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContactForm } from "./pages/contacts/index";

import { HeaderEffect } from "./hooks/Header";
import ScrollReavelling from "./hooks/ScrollReveal";
import { ProgressBar } from "./components/Progressbar/progressbar";

import { Toaster } from "react-hot-toast";
import { Home } from "./pages/home/index";
import { Cookie } from "./hooks/cookies/Cookie";
import { AboutPage } from "./pages/about/index";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import "./styles/media.scss";
import "./styles/variables.css";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { Toggler } from "./components/darkmode";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModalComponent } from "./components/modal";

export const globalTheme = {};

function App() {
  const [globalTheme, setGlobalTheme] = usePersistedState("themes", light);
  const toggleTheme = () => {
    console.log("theme", globalTheme);
    setGlobalTheme(globalTheme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={globalTheme}>
      <div className="App">
        <span className="dark_mode_main_icon">
          <Toggler toggleTheme={toggleTheme} />
        </span>
        <ScrollReavelling />
        <BrowserRouter>
          <Toaster
            position="top-right"
            reverseOrder={false}
            className="toaster"
          />
          <GlobalStyle />
          <Cookie />
          <HeaderEffect />
          <ProgressBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
