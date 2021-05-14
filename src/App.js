// Importing React
import React, { useEffect, useState } from 'react';
// Importing NavBar
import NavBar from './components/navbar/NavBar';
// Importing Hero
import Hero from './components/firstLanding/Hero'
// Importing About
import About from './components/about/About';
// Importing Testimonials
import Testimonials from './components/testimonials/Testimonials';
// Importing smooth scroll
import locomotiveScroll from 'locomotive-scroll';
// Importing the css
import './App.css'
import './components/firstLanding/Hero.css'
import './components/navbar/NavBar.css'
import './components/about/About.css'
import './components/testimonials/Testimonials.css'
import './components/testimonials/Cards.css'
// Importing motion
import { motion } from 'framer-motion'
// Importing styles
import styled from 'styled-components';


const Margin = styled.div`
    height: 100vh;
`;


// Actual App function, has our code
function App() {

  // LOCOMOTIVE SCROLL  
  const scrollRef = React.createRef();
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  // PRELOADING IMAGES FOR BETTER PERFORMANCE
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const imgs = [
      'https://res.cloudinary.com/tomatotumtum/image/upload/v1620941037/cable_mdxqwn.png',
      'https://res.cloudinary.com/tomatotumtum/image/upload/v1620941037/cup1_zqll9z.png',
      'https://res.cloudinary.com/tomatotumtum/image/upload/v1620941037/bunny_yf5pjd.png',
      'https://res.cloudinary.com/tomatotumtum/image/upload/v1620941037/chicken_hzbqrc.png',
      'https://res.cloudinary.com/tomatotumtum/image/upload/v1620941037/bowl_i4k31k.png',
      'https://res.cloudinary.com/tomatotumtum/image/upload/v1620941037/box_qclbma.png',
      'https://res.cloudinary.com/tomatotumtum/image/upload/v1620941038/cup2_ymdhuc.png',
      'https://res.cloudinary.com/tomatotumtum/image/upload/v1620941038/desk_xaugwa.png',
      'https://res.cloudinary.com/tomatotumtum/image/upload/v1620941038/cup3_rrore5.png',
      ''
    ];
  })


  return (
    <div className="App">
      
      <div className="scroll" data-scroll-speed="1" ref={scrollRef}>

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
        <Hero data-scroll/>

        <Margin data-scroll />

        <About data-scroll />

        <Margin data-scroll />

        <Testimonials data-scroll/>

        <Margin data-scroll />

      </div>
  
    </div>
  );
}

export default App;
