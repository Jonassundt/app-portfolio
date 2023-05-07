import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
        {/* Email Github */}
      </div>
      <p> &copy; 2023 jonassundt.no</p>
    </div>
  );
}

export default Footer;
