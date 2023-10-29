import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectItem.css"; // Assuming you have a CSS file for your styles

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();

  return (
    <div className="projectItem" onClick={() => navigate("/project/" + id)}>
      <div className="imageContainer">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <div className="overlay">
          <h1 className="title">{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
