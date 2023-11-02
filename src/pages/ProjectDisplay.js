import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];


  function handleClick() {
    if (!project.website) {
      alert("Demo er ikke tilgjengelig for øyeblikket.");
    } else {
      window.open(project.website, "_blank");
    }
  }

  const handleClickGithub = () => {
    if (!project.githublink) {
      alert("Dessverre ikke tilgjengelig for øyeblikket...");
    } else {
      window.open(project.githublink, "_blank");
    }
  }

  const text_to_icons = {
    'mongodb': <SiMongodb size={40} color="green" />,
    'express': <SiExpress size={40} color="black" />,
    'react': <SiReact size={40} color="blue" />,
    'node': <SiNodedotjs size={40} color="green" />,
    'typescript': <SiTypescript size={40} color='blue' />,
    'javascript': <SiJavascript size={40} color='yellow' />,
    'html': <SiHtml5 size={40} color='white' />,
    'css': <SiCss3 size={40} color='white' />
  }

  let technologiesUsed = project.skills.map(skill =>
    <div className='technologyIcon'>
      {text_to_icons[skill] || 'skill'}
    </div>

  )

  return (
    <div className="project">
      <div className='new-container'>
        <h1 className='project_header'>{project.name}</h1>
        <div className="imageContainer">
          <div className="innerContainer" onClick={() => handleClick()}>
            <img alt="" className="projectImage" src={project.image} />
            <div className="overlay">
              <h2 className="viewText">VIEW</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='technologiesUsed'>
        {technologiesUsed}
      </div>
      {project.githublink ? (
        <div className='githubIcon' onClick={handleClickGithub}>
          <GitHubIcon />
        </div>)
        :
        ''}
    </div>
  );
}

export default ProjectDisplay;
