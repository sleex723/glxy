import React, { Component } from 'react';
import styles from './product.css';
import Lightbox from 'react-image-lightbox';
import img_1 from '../../../img/img_1.jpg'
import img_2 from '../../../img/img_2.jpg'
import img_3 from '../../../img/img_3.jpg'
import img_4 from '../../../img/img_4.jpg'
import img_5 from '../../../img/img_5.jpg'
import img_6 from '../../../img/img_6.jpg'
import img_7 from '../../../img/img_7.jpg'
import img_8 from '../../../img/img_8.jpg'
import img_9 from '../../../img/img_9.jpg'

const images = [
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
  img_9
]

class Product extends Component {
  state = {
    photoIndex: 0,
    isOpen: false
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return(
      <div className={styles.Product}>
        <div className={styles.ProductContainer}>
          <h1>Product</h1>
          <div className={styles.Products}>
            {images.map(image => {
              return <img className={styles.ProductImg} src={image} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Product;