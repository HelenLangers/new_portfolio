import React from 'react'
import '../Styling/projects.css';
import OneProject from './OneProject';

function ProjectsList({projects}) {
  return (
    <div className='project-list'>
        {projects.map(project => {
            return <OneProject project={project} key={project.id}/>
        })}
    </div>
  )
}

export default ProjectsList