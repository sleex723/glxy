import React from 'react';
import styles from './details.css';

const details = () => {
  return(
    <div className={styles.Details}>
      <h3>Our Contact Details</h3>
      <p><strong>Address:</strong><br/>123 E. Huntington Dr. #100<br/>Arcade, CA 123456</p>
      <p><strong>Phone:</strong><br/>(123) 456-1234</p>
      <p><strong>Email:</strong><br/>info@galaxy.com</p>
    </div>
  )
}

export default details;