import React from 'react';
import styles from './contact.css';

const contact = () => {
  return(
    <div className={styles.Contact}>
      <h3>Email Us</h3>
      <p>Please submit your inquiries below</p>
      <form className={styles.Form}>
        <div>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email Address"/>
        </div>
        <textarea name="message" placeholder="Enter message here..."/>
        <button>Send</button>
      </form>
    </div>
  )
}

export default contact;