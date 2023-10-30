import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.png";
import projGreyRock from '../assets/projGreyRock.png'


export const ProjectList = [
  {
    id: 4,
    name: "GreyRock",
    image: projGreyRock,
    skills: ['mongodb', 'express', 'react', 'node'],
    website: 'https://greyrock.onrender.com/',
    githublink: 'https://github.com/Jonassundt/GreyRock',
  },
  {
    id: 1,
    name: "Hjemmekino / Home Cinema",
    image: Proj2,
    skills: ['mongodb', 'express', 'react', 'node', 'typescript'],
    website: 'https://jonassundt.github.io/cinema/',
    // githublink: '',
  },
  {
    id: 2,
    name: "FengselDB",
    image: Proj3,
    skills: ['mongodb', 'express', 'react', 'node'],
    // githublink: '',
  },
  // {
  //   id: 3,
  //   name: "WordGuesser",
  //   image: Proj1,
  //   skills: ['javascript', 'html', 'css'],
  //   website: 'https://jonassundt.github.io/WordQuiz/',
  //   // githublink: '',
  // },
];
