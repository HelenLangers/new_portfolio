import React, {useState} from 'react'
import './Projects.css'
import NavBar from '../../Components/NavBar/NavBar'
import ProjectsList from '../../Components/ProjectsList/ProjectsList'
import AnimateWriting from '../../Components/TypeAnimation/AnimateWriting'
import Footer from '../../Components/Footer/Footer'
import { sampleProjects } from './ProjectItems'

const Projects = () => {
    
    const [projects, setProjects] = useState(sampleProjects)
    
    const writingSequence = ['My Projects', 1000]

    return (
        <>
            <NavBar/>

            <section className="projects-page-body">
                <div className='title-section'>
                    <AnimateWriting writingSequence={writingSequence}/>  
                </div>

                <ProjectsList projects={projects}/>

            </section>

            <Footer/>
        </>
  )
}

export default Projects