// Importing necessary modules
import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer'
import { motion } from 'framer-motion';
import { Layout } from '@styled-icons/boxicons-regular';

// Making the function to essentially show the navbar and footer on every page
function LayoutRoute(props){
    return(
        <div>
            {/* Adding a motion animation to the navbar, so that it fades in from down */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Navbar Declaration, with statement of what links to add */}
                <NavBar />

            </motion.div>

            <Route path={props.path} exact={props.exact} component={props.component} />
            
            <Footer />
        </div>
    )
}

export default LayoutRoute;