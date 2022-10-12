import React from 'react';
import '../Styling/main.css';
import { TypeAnimation } from 'react-type-animation';

function AnimateWriting({writingSequence}) {
  return (
    <div className='animated-writing'>
        <TypeAnimation sequence={writingSequence}
      speed={50}
      className="animated-writing"
      cursor={true}
      />
    </div>
  )
}

export default AnimateWriting