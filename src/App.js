import React from 'react';
import './App.css';
import Header from './components/header/Header';
import MainSection from './components/sections/MainSection';
import OurWork from './components/sections/OurWork';
import Experiences from './components/sections/Experiences';
import Services from './components/sections/Services';
import { Box } from '@mui/material';
import WeCanHelpYou from './components/sections/WeCanHelpYou';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Box className="app-container">
      <Header />
      <MainSection />
      <OurWork />
      <Experiences />
      <Services />
      <WeCanHelpYou/>
      <Footer/>
      {/* Agrega otras secciones aquí */}
    </Box>
  );
}

export default App;
