// importing react
import React, { useState } from 'react';
// importing motion
import { motion } from 'framer-motion';

function IndividualImage(props) {
    return(
        <motion.div className={props.className}
            variant={props.variant}
            initial="hidden"
            animate="show"
        >
            <img src={props.imageSource} />
        </motion.div>
    );
}

export default IndividualImage;