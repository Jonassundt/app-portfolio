import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProfilePicture from "../assets/person.jpg";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Velkommen!</h2>
        <div className="prompt">
          {" "}
          <p> finnes det noe artig her da mon tro? ...</p>
          <LinkedInIcon
            className="pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jonas-sundt-a6ba89225/",
                "_blank"
              )
            }
          />
          <EmailIcon
            className="pointer"
            onClick={() => (window.location = "mailto:jonassundt98@gmail.com")}
          />
          <GitHubIcon
            className="pointer"
            onClick={() =>
              window.open("https://www.github.com/jonassundt/", "_blank")
            }
          />
        </div>
      </div>
      <div className="skills">
        {/* <h2> Informasjon </h2> */}
        <h2>Oversikt</h2>
        <div className="wrapper">
          <p className="info-text first">
            Heisann! Jeg heter Jonas og studerer Datateknologi på NTNU, der jeg
            skriver masteroppgave innen Kunstig Intelligens.
            Utvekslingsoppholdet mitt i 4. klasse ble brukt på å studere
            AI-relaterte fag på Technische Universität Berlin. Jeg har jobbet
            ved siden av studiene mine på et bo-og-behandlingshjem i
            Holmestrand. Teknologi inspirerer meg, og jeg lurer spent på hvordan
            det vil forme fremtiden vår. Under «Prosjekter» kan du ta en titt på
            noe arbeid som er gjort i forbindelse med skole og annet.
          </p>

          {/* <p className="second">my photo</p> */}
          <div className="second">
            <img
              className="profilePicture"
              src={ProfilePicture}
              height={"50%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
