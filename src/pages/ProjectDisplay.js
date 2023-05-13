import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  function handleClick() {
    console.log(project.id);
    if (project.id === 3) {
      window.open("https://jonassundt.github.io/WordQuiz/", "_blank");
    } else if (project.id === 1) {
      window.open("https://jonassundt.github.io/cinema/", "_blank");
    } else {
      //pass
    }
  }

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img
        className="pointer"
        src={project.image}
        onClick={() => {
          handleClick(project.id);
        }}
      />
      <p>
        <b>Tech: </b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
