import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function AnimateWriting({writingSequence}) {
  return (
    <div>
        <TypeAnimation sequence={writingSequence}
      speed={50}
      style={{ fontSize: '3em'}}
      wrapper="h2"
      />
    </div>
  )
}

export default AnimateWriting