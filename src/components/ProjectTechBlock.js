import React from 'react'

import { FaNodeJs, FaReact} from 'react-icons/fa'; // Import other icons as needed
import { SiMongodb, SiExpress, SiRedux, SiTypescript, SiHtml5, SiCss3, SiPython, SiJavascript, SiCsharp, SiDotnet } from 'react-icons/si';

const technologyIcons = {
    'node': <FaNodeJs size={40} color='green'/>,
    'react': <FaReact size={40} color='lightblue'/>,
    'mongodb': <SiMongodb size={40} color='green'/>,
    'expressjs': <SiExpress size={40}/>,
    'typescript': <SiTypescript size={40} color='#409fd6'/>,
    'javascript': <SiJavascript size={40} color='yellow'/>,
    'html': <SiHtml5 size={40} color='orange'/>,
    'css': <SiCss3 size={40} color='#1b98e0'/>,
    'redux': <SiRedux size={40} color='magenta'/>,
    'python': <SiPython size={40} />,
    'c#': <SiCsharp size={40} color='magenta'/>,
    'dotnet': <SiDotnet size={40} color='magenta'/>,
    // ... add other technologies and their corresponding icons here
};

const ProjectTechBlock = ({ technologyList }) => {

    const getTechnologyIcon = (technology) => {
        technology = technology.toLowerCase();
        // Return the icon component if it exists, otherwise return null or a default icon
        return technologyIcons[technology] || null;
    };


    return (
        <div className='project-tech-block'>
            {technologyList.map((item, idx) =>
                <div key={idx}>
                    {getTechnologyIcon(item)}
                    {/* <FaNodeJs /> */}
                </div>
            )}
        </div>
    )
}

export default ProjectTechBlock