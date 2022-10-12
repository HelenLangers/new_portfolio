import React from 'react'
import '../Styling/main.css';
import AnimateWriting from './AnimateWriting';
import Image from '../Assets/profileimage.jpg';
import Blob from '../Assets/blob-haikei-1.svg';
import {Link} from 'react-router-dom';

function Homepage() {

  const writingSequence = [
    'I am a junior developer', 1000]

  return (
    <div className='main-view'>
      <div className='left-side'>
        <AnimateWriting writingSequence={writingSequence}/>
        <div className='contact-button-box'>
          <Link to='/contact' className='contact-button-link'>Contact</Link>
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
        <img className='blob' src={Blob}/>
        <img className='profileimage' src={Image}/>
      </div>
    </div>
  )
}

export default Homepage