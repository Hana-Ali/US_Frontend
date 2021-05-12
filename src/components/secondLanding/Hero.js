// importing react
import React, { useState } from 'react';
// importing styles
import styled from 'styled-components';
// importing animation
import { motion } from 'framer-motion'
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

// function to show the objects
function Hero(props) {
    return(
        <div className="parentOfAll">
            {/* First group staggered together; desk, and deskBack */}
            <div className="firstGroup">
                <img className="deskBack" src={DeskBack} style={{ "z-index": "0" }} />
                <img className="desk" src={Desk} style={{ "z-index": "0" }} />
            </div>

            {/* Second group staggered together; notes, teddy, octopus, pencil case, pens, rightBox */}
            <div className="secondGroup">

                <img className="notes" src={Notes} style={{ "z-index": "1" }} />
                <img className="teddyBear" src={TeddyBear} style={{ "z-index": "0" }} />
                <img className="octopus" src={Octopus} style={{ "z-index": "0" }} />
                <img className="pencilCase" src={PencilCase} style={{ "z-index": "10" }} />
                <img className="chicken" src={Chicken} style={{ "z-index": "10" }} />
                <img className="cup1" src={Cup1} style={{ "z-index": "1" }} />
                <img className="cup2" src={Cup2} style={{ "z-index": "1" }} />
                <img className="cup3" src={Cup3} style={{ "z-index": "1" }} />

            </div>

            {/* Third group staggered together; games, box (both), postcard1 and 2, bowl, statue, bunny */}
            <div className="thirdGroup">

                <img className="games" src={Games} style={{ "z-index": "2" }} />
                <img className="box" src={Box} style={{ "z-index": "1" }} />
                <img className="postcard1" src={Postcard1} style={{ "z-index": "0" }} />
                <img className="bowl" src={Bowl} style={{ "z-index": "3" }} />
                <img className="postcard2" src={Postcard2} style={{ "z-index": "0" }} />
                <img className="figure" src={Figure} style={{ "z-index": "0" }} />
                <img className="bunny" src={Bunny} style={{ "z-index": "0" }} />
                <img className="rightBox" src={RightBox} style={{ "z-index": "0" }} />

            </div>

            {/* Fourth group staggered together; posters, headset, keyboard, polaroidUp */}
            <div className="fourthGroup">

                <img className="posters" src={Posters} style={{ "z-index": "-1" }} />
                <img className="headset" src={Headset} style={{ "z-index": "1" }} />
                <img className="keyboard" src={Keyboard} style={{ "z-index": "0" }} />
                <img className="polaroidUp" src={PolaroidUp} style={{ "z-index": "-1" }} />

            </div>

            {/* Fifth group staggered together; cable, tablet, monitor */}
            <div className="fifthGroup">

                <img className="cable" src={Cable} style={{ "z-index": "-1" }} />
                <img className="tablet" src={Tablet} style={{ "z-index": "0" }} />
                <img className="monitor" src={Monitor} style={{ "z-index": "0" }} />

            </div>

            {/* Screen special div */}
            <div className="sixthGroup">

                <img className="screen" src={Screen} style={{ "z-index": "0" }} />

            </div>
        </div>
    );
}

export default Hero;
