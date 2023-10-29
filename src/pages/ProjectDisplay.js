import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  function handleClick() {
    if (!project.website) {
      alert("I apologize, not available at the moment.");
    } else {
      window.open(project.website, "_blank");
    }
  }

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <div className="imageContainer" onClick={() => handleClick()}>
        <img alt="" className="projectImage" src={project.image} />
        <div className="overlay">
          <h2 className="viewText">VIEW</h2>
        </div>
      </div>
      <p>
        <b>Tech: </b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
