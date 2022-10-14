import React from 'react'
import '../Styling/main.css';
import AnimateWriting from './AnimateWriting';
import ProfileImage from '../Assets/profile-image-web.png';

function Homepage() {

  const writingSequence = ['Hi, I\'m Helen', 1000,
    'I\'m a junior developer', 1000]

  return (
    <div className='main-view'>
      <div className='left-side'>
        <AnimateWriting writingSequence={writingSequence}/>
        <div className='buttons-flex'>
        <div className='contact-button-box'>
          <a className='contact-button-link' href="https://github.com/HelenLangers" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original contact"></i>
          <p className='skill-name'>Visit GitHub</p></a>
        </div>
        <div className='contact-button-box'>
          <a className='contact-button-link' href="mailto:langridge.helen@outlook.com"><i class="fa-solid fa-envelope contact"></i>
          <p className='skill-name'>Email Me</p></a>
        </div>
        </div>
        <div className='language-boxes'>
          <div className='skill'>
            <i className="devicon-html5-plain lang"></i>
            <p className='skill-name'>HTML</p>
          </div>
          <div className='skill'>
            <i className="devicon-css3-plain lang"></i>
            <p className='skill-name'>CSS</p>
          </div>
          <div className='skill'>
            <i className="devicon-python-plain lang"></i>
            <p className='skill-name'>Python</p>
          </div>
          <div className='skill'>
            <i className="devicon-flask-original lang"></i>
            <p className='skill-name'>Flask</p>
          </div>
          <div className='skill'>
            <i className="devicon-postgresql-plain lang"></i>
            <p className='skill-name'>Postgresql</p>
          </div>
          <div className='skill'>
            <i className="devicon-javascript-plain lang"></i>
            <p className='skill-name'>Javascript</p>
          </div>
          <div className='skill'>
            <i className="devicon-react-original lang"></i>
            <p className='skill-name'>React</p>
          </div>
          <div className='skill'>
            <i className="devicon-mongodb-plain lang"></i>
            <p className='skill-name'>MongoDB</p>
          </div>
        </div>
      </div>

      <div className='right-side'>
        <img className='profile-image' src={ProfileImage} alt="Helen Langridge"/>
      </div>
    </div>
  )
}

export default Homepage