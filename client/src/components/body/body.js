import React from 'react';
import styles from './body.css';
import About from './about/about';
import Product from './product/product';
import Services from './services/services';

const Body = () => {
  return (
    <div>
      <About />
      <Product />
      <Services />
    </div>
  )
}

export default Body;