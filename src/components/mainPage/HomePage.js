// Importing NavBar
import NavBar from '../navbar/NavBar';
// Importing Hero
import Hero from '../firstLandingLazy/Hero'
// Importing About
import About from '../about/About';
// Importing Testimonials
import Testimonials from '../testimonials/Testimonials';
// Importing SignUp 
import SignUp from '../signUp/SignUp';
// Importing Footer 
import Footer from '../footer/Footer';
// Importing the css
import '../firstLandingLazy/Hero.css'
import '../navbar/NavBar.css'
import '../about/About.css'
import '../testimonials/Testimonials.css'
import '../testimonials/Cards.css'
import '../signUp/SignUp.css'
import '../footer/Footer.css'
// Importing motion
import { motion } from 'framer-motion'
// Importing styles
import styled from 'styled-components';

const Margin = styled.div`
    height: 90vh;
`;

const MarginMidSize = styled.div`
    height: 45vh;
`;

const MarginSmaller = styled.div`
    height: 25vh;
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

function HomePage(props)
{
    return(
        <div className="App">

            <div className="scroll">

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

            </div>

        </div>
    );
}

export default HomePage;