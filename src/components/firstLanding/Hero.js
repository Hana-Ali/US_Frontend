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

// Variants for the animations
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}


// Creating the function for the hero
function Hero(props) {
    return(
        <motion.div className="parentOfAll"
        variants={container}
        initial="hidden"
        animate="visible">

            <div className="allGroups">
            {/* First group staggered together; desk, and deskBack */}
                <IndividualImage className="deskBack" imageVariant={item} imageSource={DeskBack} style={{ "z-index": "0" }}/>
                <IndividualImage className="desk" imageVariant={item} imageSource={Desk} style={{ "z-index": "0" }}/>
            
            {/* Second group staggered together; notes, teddy, octopus, pencil case, pens, rightBox */}
                <IndividualImage className="notes" imageVariant={item} imageSource={Notes} style={{ "z-index": "1" }} />
                <IndividualImage className="teddyBear" imageVariant={item} imageSource={TeddyBear} style={{ "z-index": "0" }} />
                <IndividualImage className="octopus" imageVariant={item} imageSource={Octopus} style={{ "z-index": "0" }} />
                <IndividualImage className="pencilCase" imageVariant={item} imageSource={PencilCase} style={{ "z-index": "10" }} />
                <IndividualImage className="chicken" imageVariant={item} imageSource={Chicken} style={{ "z-index": "10" }}/>
                <IndividualImage className="cup1" imageVariant={item} imageSource={Cup1} style={{ "z-index": "1" }} />
                <IndividualImage className="cup2" imageVariant={item} imageSource={Cup2} style={{ "z-index": "1" }} />
                <IndividualImage className="cup3" imageVariant={item} imageSource={Cup3} style={{ "z-index": "1" }} />

            {/* Third group staggered together; games, box (both), postcard1 and 2, bowl, statue, bunny */}
                <IndividualImage className="games" imageVariant={item} imageSource={Games} style={{ "z-index": "2" }} />
                <IndividualImage className="box" imageVariant={item} imageSource={Box} style={{ "z-index": "1" }} />
                <IndividualImage className="postcard1" imageVariant={item} imageSource={Postcard1} style={{ "z-index": "-1" }} />
                <IndividualImage className="bowl" imageVariant={item} imageSource={Bowl} style={{ "z-index": "3" }} />
                <IndividualImage className="postcard2" imageVariant={item} imageSource={Postcard2} style={{ "z-index": "-1" }} />
                <IndividualImage className="figure" imageVariant={item} imageSource={Figure} style={{ "z-index": "0" }} />
                <IndividualImage className="bunny" imageVariant={item} imageSource={Bunny} style={{ "z-index": "0" }} />
                <IndividualImage className="rightBox" imageVariant={item} imageSource={RightBox} style={{ "z-index": "0" }} />

            {/* Fourth group staggered together; posters, headset, keyboard, polaroidUp */}
                <IndividualImage className="posters" imageVariant={item} imageSource={Posters} style={{ "z-index": "-1" }} />
                <IndividualImage className="headset" imageVariant={item} imageSource={Headset} style={{ "z-index": "1" }} />
                <IndividualImage className="keyboard" imageVariant={item} imageSource={Keyboard} style={{ "z-index": "0" }} />
                <IndividualImage className="polaroidUp" imageVariant={item} imageSource={PolaroidUp} style={{ "z-index": "-1" }} />

            {/* Fifth group staggered together; cable, tablet, monitor */}
                <IndividualImage className="cable" imageVariant={item} imageSource={Cable} style={{ "z-index": "-1" }} />
                <IndividualImage className="tablet" imageVariant={item} imageSource={Tablet} style={{ "z-index": "0" }} />
                <IndividualImage className="monitor" imageVariant={item} imageSource={Monitor} style={{ "z-index": "0" }} />

            {/* Screen special */}
                <IndividualImage className="screen" imageVariant={item} imageSource={Screen} style={{ "z-index": "0" }} />
            </div>

        </motion.div>
    );
}

export default Hero;