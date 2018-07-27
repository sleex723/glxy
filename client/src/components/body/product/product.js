import React, { Component } from 'react';
import styles from './product.css';
import Lightbox from 'react-images'
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
    currentImage: 0,
    lightboxIsOpen: false
  }

  openLightbox(index, event) {
    console.log(index)
    event.preventDefault();
    this.setState({
      lightboxIsOpen: true,
      currentImage: index
    })
  }

  closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === images.length - 1) return;

		this.gotoNext();
	}

  render() {
    const { currentImage, lightboxIsOpen } = this.state;

    return(
      <div className={styles.Product}>
        <div className={styles.ProductContainer}>
          <h1>PRODUCTS</h1>
          <h4>An online marketplace that leverages latest technology that can be easily integrated by mobile apps</h4>
          <div className={styles.Products}>
            {images.map((image, idx) => {
              return(
                <div className={styles.Frame}>
                  <img key={idx} onClick={(e) => this.openLightbox(idx, e)} className={styles.ProductImg} src={image} />
                </div>
              )
            })}

            <Lightbox
              images={[
                { src: img_1},
                { src: img_2},
                { src: img_3},
                { src: img_4},
                { src: img_5},
                { src: img_6},
                { src: img_7},
                { src: img_8},
                { src: img_9}
              ]}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              onClickImage={this.handleClickImage.bind(this)}
              onClickNext={this.gotoNext.bind(this)}
              onClickPrev={this.gotoPrevious.bind(this)}
              onClickThumbnail={this.gotoImage.bind(this)}
              onClose={this.closeLightbox.bind(this)}
            />

          </div>
        </div>
      </div>
    )
  }
}

export default Product;