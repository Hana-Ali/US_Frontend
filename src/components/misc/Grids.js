import React from 'react';
import Holder from './ProductHolder'

function ProductHolder(props)
{
    return(
        <div className="App">
          <div class="container art-gallery">
            <div class="row justify-content-md-center">
              <div class="col-md-auto"><Holder link="./product-1" productlabel="product-1"></Holder></div>
              <div class="col-md-auto"><Holder link="./product-4" productlabel="product-4"></Holder></div>
              <div class="col-md-auto"><Holder link="./product-5" productlabel="product-5"></Holder></div>
              <div class="col-md-auto"><Holder link="./product-2" productlabel="product-2"></Holder></div>
            </div>
          <div class="row">
            <div class="col-md-auto"><Holder link="./product-3" productlabel="product-3"></Holder></div>
            <div class="col-md-auto"><Holder link="./product-2" productlabel="product-2"></Holder></div>
            <div class="col-md-auto"><Holder link="./product-4" productlabel="product-4"></Holder></div>
            <div class="col-md-auto"><Holder link="./product-5" productlabel="product-5"></Holder></div>
          </div>
        </div> 
      </div>          
    );
}

export default ProductHolder;