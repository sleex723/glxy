import React from 'react';
import styles from './service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faMobileAlt, faLightbulb, faBuilding } from '@fortawesome/free-solid-svg-icons'

const service = () => {
  return(
    <div className={styles.Service}>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.CardFront}>
            <FontAwesomeIcon size="3x" icon={faCog} />
            <h3>App Development</h3>
          </div>
          <div className={styles.CardBack}>
            <p>Advanced custom solution for eCommerce, investment and exchange.</p>
          </div>
        </div>
      </div>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.CardFront}>
          <FontAwesomeIcon size="3x" icon={faMobileAlt} />
          <h3>Mobile App Development</h3>
          </div>
          <div className={styles.CardBack}>
          <p>A robust platform that allows for merchants to offer unique loyalty options to their customers on a secure environment</p>
          </div>
        </div>
      </div>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.CardFront}>
          <FontAwesomeIcon size="3x" icon={faLightbulb} />
          <h3>Technical Consultation</h3>
          </div>
          <div className={styles.CardBack}>
            <p>Provide training courses and host users conferences for the use of our platform to business partners</p>
          </div>
        </div>
      </div>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.CardFront}>
          <FontAwesomeIcon size="3x" icon={faBuilding} />
          <h3>Custom Branding</h3>
          </div>
          <div className={styles.CardBack}>
            <p>We know that businesses need to establish a brand with their customers, so we allow our partners flexibility with how our services are presented alongside theirs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default service;