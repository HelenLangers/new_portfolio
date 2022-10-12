import React from 'react';
import '../Styling/main.css';
import { TypeAnimation } from 'react-type-animation';

function AnimateWriting({writingSequence}) {
  return (
    <div className='animated-writing'>
        <TypeAnimation sequence={writingSequence}
      speed={50}
      style={{ fontSize: '3em'}}
      wrapper="animated-writing"
      />
    </div>
  )
}

export default AnimateWriting