import React from 'react';
import './Product.css';
import Colors from '../../Assets/Colors'
import DetailsThumb from '../../Assets/DetailsThumb';
// Importing Footer 
// Importing motion
import { motion } from 'framer-motion'
// Importing styles
import styled from 'styled-components';

class Product extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "I accidentally spilled paint.. sorry",
        "src": [
            "https://wallpapercave.com/wp/wp3310847.jpg",
          ],
        "description": "Our budget couldn't cover enough paint to start over...",
        "content": "",
        "price": 230,
        "colors":["black"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {

          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default Product;