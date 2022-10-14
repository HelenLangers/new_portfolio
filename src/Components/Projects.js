import React, {useState} from 'react';
import ProjectsList from './ProjectsList';
import AnimateWriting from './AnimateWriting';
import '../Styling/projects.css';
import holyshiitake from '../Assets/HolyShiitake.png';
import worldtravel from '../Assets/worldtravel.png';
import activegym from '../Assets/activegym.jpg';
import python from '../Assets/python.svg';
import flask from '../Assets/flask.svg';
import postgresql from '../Assets/postgresql.svg';
import javascript from '../Assets/javascript.svg';
import react from '../Assets/react.svg';
import api from '../Assets/api.svg';
import mongodb from '../Assets/mongodb.svg';
import nodejs from '../Assets/nodejs.svg';

function Projects() {

  const sampleProjects = [
    {
      id:1,
      title: "Active Gym",
      summary: "My first ever coding project completed solo over 6 days. This Python web app is for admin use at a gym to manage classes, members and instructors using RESTful routes and an SQL database.",
      github: "https://github.com/HelenLangers/CC_Gym_App_Project",
      image: activegym,
      lang1: python,
      lang2: flask,
      lang3: postgresql
    },
    {
      id:2,
      title: "World Country Check List",
      tech: "React, Javascript, HTML, CSS, React-Simple-Maps, Router",
      summary: "A homework assignment from CodeClan which I just kept running with. The starting brief was to understand useState and useEffect hooks when using APIs in React. I used the REST Countries API and React-Simple-Maps to render out a world map that colours in as you add countries you've travelled to.",
      github: "https://github.com/HelenLangers/CC_Visited_Countries_App",
      image: worldtravel,
      lang1: javascript,
      lang2: react,
      lang3: api
    },
    {
      id:3,
      title: "Holy Shiitake",
      tech: "React, Javascript, MongoDB, Express, NodeJS, Edamam API, HTML, CSS",
      summary: "A group project at CodeClan built over 6 days. Holy Shiitake uses a recipe API to allow searches and diary entries to track how often you're cooking meals at home.",
      github: "https://github.com/HelenLangers/Holy_Shiitake_habit_tracker_project",
      image: holyshiitake,
      lang1: react,
      lang2: mongodb,
      lang3: nodejs
    }
  ]

  const [projects, setProjects] = useState(sampleProjects)

  const writingSequence = ['My Projects', 1000]

  return (
    <div className='projects-container'>
      <AnimateWriting writingSequence={writingSequence} />
      <ProjectsList projects={projects}/>
    </div>
  )
}

export default Projects