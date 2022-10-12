import React from 'react'
import '../Styling/main.css';
import AnimateWriting from './AnimateWriting';

function Homepage() {

  const writingSequence = []

  return (
    <div className='main-view'>
    <AnimateWriting />
    </div>
  )
}

export default Homepage