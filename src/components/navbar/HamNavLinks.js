// Importing react and useState
import { SettingsInputComponent } from '@styled-icons/material';
import React, { useState } from 'react';
// Importing style
import styled from 'styled-components';
// Importing the toggle motion path and attributes
import { MenuToggle } from './MenuToggle';
// Importing links
import navbarLinks from './MenuItems';
// Importing motion
import { motion } from 'framer-motion';

// Styling the container
const LinksContainerSmall = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

// Styling the ul components
const LinksMenuSmall = styled.ul`
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    width: 50%;
    text-transform: uppercase;
    letter-spacing: 3px;
    list-style: none;
    text-align: left;
    top: 7rem;
    background-color: #fff;
    left: 0;
`;

// Styling the li's
/*const LinksItemSmall = styled.li`
    display: flex;
    width: 100%;
    padding: 0 1.1em;
    margin-bottom: 10px;
    margin: 2rem;
`;

// Styling each individual link
const LinkSmall = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.6rem;
    font-weight: bold;

    &:hover{
        color: rgb(24, 23, 23);
    }
`;

// Variants for staggering
const variants = {
    // Transition for when opening and closing, stagger and delay children for animation
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};*/

// Making the actual function of the smaller nav
function HamNavLinks(props) {
    // Setting the states
    const [isOpen, setOpen] = useState(false);

    return(
        <LinksContainerSmall>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {/* This is essentially a format to ensure the 2nd (between ()) only happens if the first
                is true, so if it's open */}
            {isOpen && (
                    <LinksMenuSmall>
                        {/* Each link Menu has a bunch of items, with each item having a link */}
                        {
                            navbarLinks.map(
                                (label) => {
                                    return (
                                        <motion.li className="hamList"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        >
                                            <a className="hamText" href={label.path}>{label.title}</a>
                                        </motion.li>
                                    )
                                }
                            )
                        }
                    </LinksMenuSmall>
            )}
    </LinksContainerSmall>
    );
}

export default HamNavLinks;