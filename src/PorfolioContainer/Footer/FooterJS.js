import React from "react";
import  './Footcss.css';

function FooterJS() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>KIEU CONG TAM</h4>
             <h1 className="list-unstyled">
              <li>An adventure astronaut developer</li>
            </h1> 
          </div>

          <div className="col">
            <h4>Home</h4>
          </div>
          <div className="col">
            <h4>About me</h4>
          </div>
          <div className="col">
            <h4>Projects</h4>
          </div>
          <div className="col">
            <h4>Skills</h4>
          </div>
          
        </div>
        <hr />
        
      </div>
    </div>
  );
}

export default FooterJS;