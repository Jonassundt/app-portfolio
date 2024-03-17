import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ projectName, imageUrl, imgLink, technologies }) => {

  function handleClick() {
    if (!imgLink || (imgLink === "")) {
      alert("Demo er ikke tilgjengelig for øyeblikket.");
    } else {
      window.open(imgLink, "_blank");
    }
  }


  return (
    <div className="project-card-container" onClick={handleClick}>
      <div className="project-card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="overlay">
          <h3>{projectName}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;