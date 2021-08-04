import React from 'react';
import LandingHeader from "./Header"
import landingBackgroundImg from "@Img/main-landing.jpg"

const Landing = () => {
  return (
    <>
      <div className="landing-main">
        <LandingHeader />
        <div className="subheader">
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className="landing-primary-section">
          <img src={landingBackgroundImg} alt="landing" />
          <div className="content-primary-section">
            <div>
              <h1>I'm <span className="landing-name">Felipe</span>, nice to meet you!</h1>
              
            </div>
          </div>
        </div>
        <div className="landing-bio-section">
          <p>ola</p>
        </div>
      </div>
    </>
  );
}
 
export default Landing;