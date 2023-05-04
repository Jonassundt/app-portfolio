import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <TwitterIcon />
        <EmailIcon />
        <GitHubIcon />
        {/* Email Github */}
      </div>
      <p> &copy; 2022 jonassundt.no</p>
    </div>
  );
}

export default Footer;