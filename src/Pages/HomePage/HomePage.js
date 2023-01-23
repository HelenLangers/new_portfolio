import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import AnimateWriting from '../../Components/TypeAnimation/AnimateWriting'
import Skill from '../../Components/Skill/Skill'
import './HomePage.css'
import Image from '../../Assets/Images/HelenLangridge.png'
import {HiOutlineMail, HiOutlineDocument} from 'react-icons/hi'

const HomePage = () => {

  const homepageWriting = ['Hi, I\'m Helen', 1000,
  'I\'m a junior developer', 1000]

  return (
    <>
      <NavBar/>
      <article className='home-page-body'>
        <div className='left-side'>

        <div className='writing-container'>
            <AnimateWriting writingSequence={homepageWriting}/>
          </div>

          <div className='contact-container'>
            <div className='contact-box'>
              <a className="contact-box-link" href="mailto:langridge.helen@outlook.com" target="_blank" rel="noopener noreferrer"><HiOutlineMail/><p className='contact-paragraph'>Email</p></a>
            </div>

            <div className='contact-box'>
              <a className="contact-box-link" href="https://drive.google.com/file/d/14JCvghwJuAkeF33HcDVk_P3eFcPZaij1/view?usp=sharing" target="_blank" rel="noopener noreferrer"><HiOutlineDocument/><p className='contact-paragraph'>CV</p></a>
            </div>
          </div>

          <div className='skill-container'>
            <Skill iClassName="devicon-html5-plain" skill="HTML"/>
            <Skill iClassName="devicon-css3-plain" skill="CSS"/>
            <Skill iClassName="devicon-javascript-plain" skill="Javascript"/>
            <Skill iClassName="devicon-react-original" skill="React"/>
            <Skill iClassName="devicon-nodejs-plain" skill="Node"/>
            <Skill iClassName="devicon-express-original" skill="Express"/>
            <Skill iClassName="devicon-mongodb-plain" skill="MongoDB"/>
            <Skill iClassName="devicon-python-plain" skill="Python"/>
            <Skill iClassName="devicon-flask-original" skill="Flask"/>
            <Skill iClassName="devicon-postgresql-plain" skill="Postgresql"/>
          </div>
        </div>

        <div className='right-side'>
          <img src={Image} alt="Helen Langridge" className='hero-image'/>
        </div>
      </article>

      <Footer/>
    </>
  )
}

export default HomePage