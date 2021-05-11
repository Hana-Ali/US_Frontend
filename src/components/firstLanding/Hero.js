// importing react
import React, { useState } from 'react';
// importing styles
import styled from 'styled-components';
// importing motion
import { motion } from 'framer-motion';
// importing the images container
import IndividualImage from './IndividualImage'
// Importing all images from folder of images for desk objects
import Bowl from '../../assets/images/heroObjects/bowl.png';
import Box from '../../assets/images/heroObjects/box.png';
import Bunny from '../../assets/images/heroObjects/bunny.png';
import Cable from '../../assets/images/heroObjects/cable.png';
import Chicken from '../../assets/images/heroObjects/chicken.png';
import Cup1 from '../../assets/images/heroObjects/cup1.png';
import Cup2 from '../../assets/images/heroObjects/cup2.png';
import Cup3 from '../../assets/images/heroObjects/cup3.png';
import Desk from '../../assets/images/heroObjects/desk.png';
import DeskBack from '../../assets/images/heroObjects/deskBack.png';
import Figure from '../../assets/images/heroObjects/figure.png';
import Games from '../../assets/images/heroObjects/games.png';
import Headset from '../../assets/images/heroObjects/headset.png';
import Keyboard from '../../assets/images/heroObjects/keyboard.png';
import Monitor from '../../assets/images/heroObjects/monitor.png';
import Notes from '../../assets/images/heroObjects/notes.png';
import Octopus from '../../assets/images/heroObjects/octopus.png';
import PencilCase from '../../assets/images/heroObjects/pencilCase.png';
import PolaroidUp from '../../assets/images/heroObjects/polaroidUp.png';
import Postcard1 from '../../assets/images/heroObjects/postcard1.png';
import Postcard2 from '../../assets/images/heroObjects/postcard2.png';
import Posters from '../../assets/images/heroObjects/posters.png';
import RightBox from '../../assets/images/heroObjects/rightBox.png';
import Screen from '../../assets/images/heroObjects/screen.png';
import Tablet from '../../assets/images/heroObjects/tablet.png';
import TeddyBear from '../../assets/images/heroObjects/teddyBear.png';

// Creating a wrapper for the images
const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
`;

// Variants for the animations
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}
const container2 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
}
const container3 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}
const container4 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
}
const container5 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8
        }
    }
}
const screenContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 1
        }
    }
}
const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}


// Creating the function for the hero
function Hero(props) {
    return(
        <div className="parentOfAll">

            {/* First group staggered together; desk, and deskBack */}
            <motion.div className="firstGroup"
            variant={container}
            initial="hidden"
            animate="show"
            >
                <IndividualImage className="deskBack" variant={item} imageSource={DeskBack} />
                <IndividualImage className="desk" variant={item} imageSource={Desk} />
            </motion.div>
            
            {/* Second group staggered together; notes, teddy, octopus, pencil case, pens, rightBox */}
            <motion.div className="secondGroup"
                variant={container2}
                initial="hidden"
                animate="show"
            >
                <IndividualImage className="notes" variant={item} imageSource={Notes} />
                <IndividualImage className="teddyBear" variant={item} imageSource={TeddyBear} />
                <IndividualImage className="octopus" variant={item} imageSource={Octopus} />
                <IndividualImage className="pencilCase" variant={item} imageSource={PencilCase} />
                <IndividualImage className="chicken" variant={item} imageSource={Chicken} />
                <IndividualImage className="cup1" variant={item} imageSource={Cup1} />
                <IndividualImage className="cup2" variant={item} imageSource={Cup2} />
                <IndividualImage className="cup3" variant={item} imageSource={Cup3} />

            </motion.div>

            {/* Third group staggered together; games, box (both), postcard1 and 2, bowl, statue, bunny */}
            <motion.div className="thirdGroup"
                variant={container3}
                initial="hidden"
                animate="show"
            >
                <IndividualImage className="games" variant={item} imageSource={Games} />
                <IndividualImage className="box" variant={item} imageSource={Box} />
                <IndividualImage className="postcard1" variant={item} imageSource={Postcard1} />
                <IndividualImage className="bowl" variant={item} imageSource={Bowl} />
                <IndividualImage className="postcard2" variant={item} imageSource={Postcard2} />
                <IndividualImage className="figure" variant={item} imageSource={Figure} />
                <IndividualImage className="bunny" variant={item} imageSource={Bunny} />
                <IndividualImage className="rightBox" variant={item} imageSource={RightBox} />

            </motion.div>

            {/* Fourth group staggered together; posters, headset, keyboard, polaroidUp */}
            <motion.div className="fourthGroup"
                variant={container4}
                initial="hidden"
                animate="show"
            >
                <IndividualImage className="posters" variant={item} imageSource={Posters} />
                <IndividualImage className="headset" variant={item} imageSource={Headset} />
                <IndividualImage className="keyboard" variant={item} imageSource={Keyboard} />
                <IndividualImage className="polaroidUp" variant={item} imageSource={PolaroidUp} />

            </motion.div>

            {/* Fifth group staggered together; cable, tablet, monitor */}
            <motion.div className="fifthGroup"
                variant={container5}
                initial="hidden"
                animate="show"
            >
                <IndividualImage className="cable" variant={item} imageSource={Cable} />
                <IndividualImage className="tablet" variant={item} imageSource={Tablet} />
                <IndividualImage className="monitor" variant={item} imageSource={Monitor} />

            </motion.div>

            {/* Screen special div */}
            <motion.div className="sixthGroup"
                variant={screenContainer}
                initial="hidden"
                animate="show"
            >
                <IndividualImage className="screen" variant={item} imageSource={Screen} />

            </motion.div>

        </div>
    );
}

export default Hero;