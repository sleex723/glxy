import React from 'react';
import styles from './service.css';

const service = () => {
  return(
    <div className={styles.Service}>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.CardFront}>
            Front
          </div>
          <div className={styles.CardBack}>
            Backd
          </div>
        </div>
      </div>
    </div>
  )
}

export default service;