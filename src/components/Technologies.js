import React from 'react'
import Techblock from './Techblock';

const technologies = ["JavaScript", "C#", ".NET", "Python", "HTML", "CSS", "ReactJS", "MongoDB", "ExpressJS", "NodeJS", "Redux", "TypeScript"];


const Technologies = () => {


    return (
        <div className='container'>
            <div className='inner-container'>
                <h2>Tech</h2>
                {technologies.map(technology => <Techblock key={technology} name={technology}></Techblock>)}
            </div>
        </div>
    );

}

export default Technologies