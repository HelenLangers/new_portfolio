import React from 'react'
import OneProject from './OneProject'
import './ProjectList.css'


const ProjectsList = ({projects}) => {
  return (
    <div className='project-list'>
        {projects.map(project => {
            return <OneProject project={project} key={project.id}/>
        })}
    </div>
  )
}

export default ProjectsList