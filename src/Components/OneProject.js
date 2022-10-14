import React from 'react'
import '../Styling/projects.css';

function OneProject({project}) {

  return (
    <div className='project-block'>
        <div className='image-half'>
            <img className='screenshot' src={project.image} alt="web app screenshot"/>
        </div>
        <div className='text-half'>
            <h3>{project.title}</h3>
            <div className='tech-box'>
                <div className='language'>
                    <img className='language one-lang' src={project.lang1} alt="language 1 icon"/>
                    <img className='language one-lang' src={project.lang2} alt="language 2 icon"/>
                    <img className='language one-lang' src={project.lang3} alt="language 3 icon"/>
                </div>
            </div>
            <p className='summary'>{project.summary}</p>
            <div className='button-box'>
            <a className='button-link' href={project.github} target="_blank" rel="noopener noreferrer">See it on Github</a>
            </div>
        </div>
    </div>
  )
}

export default OneProject