import React from 'react'
import './Footer.css'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className='social-icon-container'>
            <a className='social-icon' href="https://github.com/HelenLangers" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a className='social-icon' href="https://www.linkedin.com/in/helen-langridge-62b32b166/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a className='social-icon' href="https://www.instagram.com/helen.langridge/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        </div>
    </footer>
  )
}

export default Footer