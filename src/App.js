// Importing React
import React, { useEffect, useState } from 'react';
// Importing NavBar
import NavBar from './components/navbar/NavBar';
// Importing Hero
import Hero from './components/firstLandingLazy/Hero'
// Importing About
import About from './components/about/About';
// Importing Testimonials
import Testimonials from './components/testimonials/Testimonials';
// Importing SignUp 
import SignUp from './components/signUp/SignUp';
// Importing Footer 
import Footer from './components/footer/Footer';
// Importing the css
import './App.css'
import './components/firstLandingLazy/Hero.css'
import './components/navbar/NavBar.css'
import './components/about/About.css'
import './components/testimonials/Testimonials.css'
import './components/testimonials/Cards.css'
import './components/signUp/SignUp.css'
import './components/footer/Footer.css'
// Importing motion
import { motion } from 'framer-motion'
// Importing styles
import styled from 'styled-components';

const Margin = styled.div`
    height: 90vh;
`;

const MarginMidSize = styled.div`
    height: 60vh;
`;

const MarginSmaller = styled.div`
    height: 10vh;
`;

// Main animation variant for the parent container
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1
  }
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

// Actual App function, has our code
function App() {

  return (
    <div className="App">
      
      <div className="scroll">

        {/* Adding a motion animation to the navbar, so that it fades in from down */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          >
          {/* Navbar Declaration, with statement of what links to add */}
          <NavBar />

        </motion.div>

        {/* Hero part */}
        <Hero />

        <Margin />

        <About />

        <Margin />

        <motion.div className="appGroups"
          variants={container}
          initial="hidden"
          animate="visible">

          <motion.h2 className="headingText"
            variants={item}>
            Testimonials
          </motion.h2>

        </motion.div>

        <Testimonials />

        <MarginMidSize />

        <SignUp />

        <MarginSmaller />

        <Footer />

      </div>
  
    </div>
  );
}

export default App;
