// Importing NavBar
import NavBar from './components/navbar/NavBar';
// Importing Hero
import Hero from './components/firstLanding/Hero'
// Importing the css
import './App.css'
import './components/firstLanding/Hero.css'
// Importing motion
import { motion } from 'framer-motion'
import styled from 'styled-components';



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
    </div>
  );
}

export default App;
