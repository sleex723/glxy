import React from 'react';
import styles from './header.css';
import Navigation from './navbar/navbar';

const Header = () => {
  return(
    <div className={styles.Header}>
      <Navigation />
      <div className={styles.BgVideo}>
        <video className={styles.BgVideoContent} autoPlay loop muted>
          <source src="https://static.videezy.com/system/resources/previews/000/005/501/original/Earth_Sun_over_top.mp4" type="video/mp4"/>
          Your browser is not supported!
        </video>
      </div>
      <div className={styles.BannerContent}>
        <h1>F&L GALAXY</h1>
        <h2>NOW OR NEVER</h2>
        <p>GAMING TECHNOLOGY</p>
      </div>
    </div>
  )
}

export default Header;