import React from 'react'

const OneProject = ({project}) => {

    const isLive = (project.live !== null)

  return (
    <div className='project-block'>
        <div className='image-half'>
            <img className='screenshot' src={project.image} alt="web app screenshot"/>
        </div>
        <div className='text-half'>
            <h3>{project.title}</h3>
            <div className='tech-box'>
                <div className='language'>
                    <img className='language one-lang' src={project.lang1.langIcon} alt={project.lang1.langName}/>
                    <img className='language one-lang' src={project.lang2.langIcon} alt={project.lang2.langName}/>
                    <img className='language one-lang' src={project.lang3.langIcon} alt={project.lang3.langName}/>
                </div>
            </div>
            <p className='summary'>
                {"This project was built using " + project.tech}
                <br/>
                {project.summary}</p>
                <div className='button-box'>
                <a className='button-link' href={project.github} target="_blank" rel="noopener noreferrer">See it on Github</a>
                </div>
                {isLive && <div className='button-box'>
                    <a className='button-link' href={project.live} target="_blank" rel="noopener noreferrer">See it live</a>
                </div>}
        </div>
    </div>
  )
}

export default OneProject