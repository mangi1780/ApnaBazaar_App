import React from 'react';
import Product from '../Components/Product.js';
import data from '../data.js';

export default function HomeScreen(){
    return(
        <div className="row center">{
            data.products.map(product => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
    );
}