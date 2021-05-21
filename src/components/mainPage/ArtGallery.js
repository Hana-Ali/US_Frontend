// Importing NavBar
import NavBar from './LandingItems/navbar/NavBar';
// Importing Footer 
import Footer from './LandingItems/footer/Footer';
import ProductListing from '../misc/ProductPages/ProductListing';
import React, {useEffect, useState} from "react";
import ProductInfo from '../misc/ProductPages/ProductInfo.js';
// Importing the css
import './LandingItems/navbar/NavBar.css'
import './LandingItems/testimonials/Cards.css'
import './LandingItems/footer/Footer.css'
// Importing motion
import { motion } from 'framer-motion'
// Importing styles
import styled from 'styled-components';
import '../misc/Assets/bg.css'
import '../misc/Misc.css'
const Margin = styled.div`
    height: 90vh;
`;


function Paintings(){
    const [paintings, setpaintings] = useState([{
        title: '',
        description:'',
        price: '',
        color: '',
        productImage: '',
        associatedUsername: ''
    }])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/product/`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setpaintings(jsonRes));
    })
    

    return <div className="background">
        <h1 className="artstart">Art Gallery</h1>
        {paintings.map(painting =>
        <div>
            <div className="box"><img className="product-holder" src={painting.productImage}/>
            <div className="box-content">
                <h3 className="title">{painting.title}</h3>
                <span className="post">
                    {painting.description}<br/>
                    ${painting.price}<br/>
                    Artist: {painting.associatedUsername}
                </span>
                </div>
                </div>            
            </div>
        )}

    </div>
}

export default Paintings;