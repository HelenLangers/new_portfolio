import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import './AnimateWriting.css'

const AnimateWriting = ({writingSequence}) => {
  return (
    <div className='animated-writing'>
        <TypeAnimation sequence={writingSequence}
            speed={50}
            cursor={true}
            wrapper="span"
            />
    </div>
  )
}

export default AnimateWriting