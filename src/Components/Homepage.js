import React from 'react'
import '../Styling/main.css';
import AnimateWriting from './AnimateWriting';
import Image from '../Assets/profileimage.jpg';
import Blob from '../Assets/blob-haikei-1.svg';

function Homepage() {

  const writingSequence = [
    'I am a junior developer', 1000]

  return (
    <div className='main-view'>
    <div className='left-side'>
      <AnimateWriting writingSequence={writingSequence}/>
      <div>
        buttons
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