import React from 'react'
import ProjectCard from './ProjectCard';
import proj_fengsel from "../images/proj_fengselDB.png";
import proj_greyrock from "../images/proj_greyrock.png";
import proj_dotNetApi from "../images/proj_dotNetApi.png";
import proj_hjemmekino from "../images/proj_hjemmekino.png";
// import proj_norwai from "../images/norwAI-textAnnotation.png";
import proj_norwai from "../images/norwAIAnnotationTool.png";
import proj_wordquiz from "../images/proj_wordquiz.png";
import ProjectTechBlock from "./ProjectTechBlock";


const projects = [
    { name: "Wine .NET Web API", image: proj_dotNetApi, url: '', technologies: ["c#", "dotnet"] },
    { name: "GreyRock", image: proj_greyrock, url: 'https://greyrock.onrender.com/', technologies: ["react", "mongodb", "expressjs", "node", "redux"] },
    { name: "NorwAI annotation tool", image: proj_norwai, url: "https://raw.githubusercontent.com/Jonassundt/app-portfolio/master/src/images/norwAI-textAnnotation.png", technologies: ["python"] },
    { name: "Hjemmekino", image: proj_hjemmekino, url: "https://jonassundt.github.io/cinema/", technologies: ["react", "html", "css"] },
    { name: "FengselDB", image: proj_fengsel, url: "", technologies: ["typescript", "react", "mongodb", "expressjs", "node"] },
    { name: "WordQuiz (old)", image: proj_wordquiz, url: "https://jonassundt.github.io/WordQuiz/", technologies: ["HTML", "CSS", "javascript"] }
];

const Projects = () => {
    return (
        <div className='container'>
            <div className='inner-container'>
                <h2>Prosjekter</h2>
                {projects.map(project =>
                    <div className='project-card-container'>
                        <ProjectCard
                            key={project.name}
                            projectName={project.name}
                            imageUrl={project.image}
                            imgLink={project.url}
                        />
                        <ProjectTechBlock technologyList={project.technologies}/>
                        
                    </div>)
                }

            </div>
        </div>
    )
}

export default Projects