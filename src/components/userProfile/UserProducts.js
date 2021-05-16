// Importing react
import React, { useState, useEffect } from 'react';
// Importing motion
import { motion } from 'framer-motion';
// importing hook to know when in frame
import { useInView } from 'react-intersection-observer';

// Just for the initial
const initialContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
};

function UserProducts(props)
{
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        console.log("use effect hook, inView = ", inView);
    }, [inView])

    return (
        // Div that holds everything, shows only if in view
        <motion.div className="productsContainerUser"
            variants={initialContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            ref={ref}
        >




        </motion.div>
    );
}

export default UserProducts;



