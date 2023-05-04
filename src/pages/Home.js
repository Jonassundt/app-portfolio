import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Velkommen!</h2>
        <div className="prompt">
          {" "}
          <p> Jeg håper du finner noe du liker.</p>
          <LinkedInIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h2> Informasjon </h2>
        <ol className="list">
          <li className="item">
            <h2>Her er noe informasjon.</h2>
            <span>HTML, CSS, ReactJS</span>
          </li>
          {/* content */}
        </ol>
      </div>
    </div>
  );
}

export default Home;
