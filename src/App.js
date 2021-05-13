// Importing NavBar
import NavBar from './components/navbar/NavBar';
// Importing Hero
import Hero from './components/firstLanding/Hero'
// Importing About
import About from './components/about/About';
// Importing the css
import './App.css'
import './components/firstLanding/Hero.css'
import './components/navbar/NavBar.css'
import './components/about/About.css'
// Importing motion
import { motion } from 'framer-motion'
// Importing styles
import styled from 'styled-components';


const Margin = styled.div`
    height: 100vh;
`;


// Actual App function, has our code
function App() {
  return (
    <div className="App">
      
      {/* Adding a motion animation to the navbar, so that it fades in from down */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
          {/* Navbar Declaration, with statement of what links to add */}
          <NavBar />
      </motion.div>
      
      {/* Hero part */}
      <Hero />

      <Margin />

      <About />

      <Margin />

    </div>
  );
}

export default App;
