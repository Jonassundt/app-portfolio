import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="mini-container">
        <div className='content-container'>
          {/* content */}
          <div>
            <p>
              <b>E-post</b> jonassundt98@gmail.com
          </p>
          </div>
          <p>
            <b>Adresse</b> Trondheim/Oslo/Berlin
        </p>
          <p>
            <b>GitHub </b>
            <a href="https://github.com/Jonassundt">
              https://github.com/Jonassundt
          </a>
          </p>
          <p>
            <b>LinkedIn </b>
            <a href="https://www.linkedin.com/in/jonas-sundt-a6ba89225">
              linkedin/jonassundt
          </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
