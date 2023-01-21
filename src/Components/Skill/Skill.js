import React from 'react'
import './Skill.css'

const Skill = (props) => {
  return (
    <div className='skill-box'>
      <i className={props.iClassName}></i>
      <p className='skill-name'>{props.skill}</p>
    </div>
  )
}

export default Skill