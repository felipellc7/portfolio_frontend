import React from 'react';
import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <>
      <div className="landing-header-main">
        <h2>FLL</h2>
        <div className="landing-header-cont-routes">
          <Link to="!#">Route 1</Link>
          <Link to="!#">Route 2</Link>
          <Link to="!#">Route 3</Link>
        </div>
        <button>Network</button>
      </div>
    </>
  );
}
 
export default LandingHeader;