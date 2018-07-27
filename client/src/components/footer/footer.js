import React from 'react';
import styles from './footer.css';
import Details from './details/details';
import Contact from './contact/contact';

const footer = () => {
  return(
    <div className={styles.Footer}>
      <h1>CONTACT US</h1>
      <div className={styles.FooterContainer}>
        <Details />
        <Contact />
      </div>
    </div>
  )
}

export default footer;