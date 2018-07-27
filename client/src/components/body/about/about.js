import React from 'react';
import styles from './about.css';

const About = () => {
  return(
    <div className={styles.About}>
      <div className={styles.Content}>
        <h1>ABOUT GALAXY</h1><br/>
        <p>We are a FinTech company founded in 2015 with the goal of reaching out and letting consumers and merchants have the tools needed to build lasting relationships with customers. We build applications using cutting edge architecture to offer secure borderless commerce options from the ground up and 
are excited to share our technology with partners to help further our mission. 
We currently provide our services to international companies throughout the world with partners in Hong Kong, Malaysia, China.<br/><br/>

We strive to further the movement around the world to open up markets and empower individuals and businesses alike to work together and establish prosperous local communities while also bringing people together by further allowing people with unique products to get them to the public. 
We hope that with the advanced tools that we provide, our partners can continue to grow and develop new businesses and build strong relationships with customers by rewarding them in ways that help them continue to enjoy the new products that come as a result of their efforts. We believe in freeing the global economy and that is why we have chosen to place our time and effort into building apps that leverage its strengths to continue the process of removing barriers and rewarding consumers and businesses alike.</p>
      </div>
    </div>
  )
}

export default About;