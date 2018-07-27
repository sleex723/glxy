import React from 'react';
import styles from './services.css';
import Service from './service/service';

const services = () => {
  return(
    <div className={styles.Services}>
      <h1>Services</h1>
      <h3>From development to operation, full customer services and support via our App</h3>
      <Service />
    </div>
  )
}

export default services;