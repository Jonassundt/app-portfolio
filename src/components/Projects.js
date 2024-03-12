import React from 'react'
import ProjectCard from './ProjectCard';
import proj_fengsel from "../images/proj_fengselDB.png";
import proj_greyrock from "../images/proj_greyrock.png";
import proj_hjemmekino from "../images/proj_hjemmekino.png";
import proj_wordquiz from "../images/proj_wordquiz.png";


const projects = [
    { name: "GreyRock", image: proj_greyrock, url: 'https://greyrock.onrender.com/' },
    { name: "Hjemmekino", image: proj_hjemmekino, url: "https://jonassundt.github.io/cinema/" },
    { name: "FengselDB", image: proj_fengsel, url: "" },
    { name: "WordQuiz", image: proj_wordquiz, url: "https://jonassundt.github.io/WordQuiz/" }
];

const Projects = () => {
    return (
        <div className='container'>
            <div className='inner-container'>
                <h2>Tidligere prosjekter</h2>
                {projects.map(project =>
                    <ProjectCard
                        key={project.name}
                        projectName={project.name}
                        imageUrl={project.image}
                        imgLink={project.url}
                    />)
                }

            </div>
        </div>
    )
}

export default Projects