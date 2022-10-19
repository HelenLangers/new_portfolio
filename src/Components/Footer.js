import React from 'react';
import '../Styling/footer.css';

function Footer() {
  return (
    <footer className='FooterBar'>
      <div className="footer-social-media">
        <a href="https://github.com/HelenLangers" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original icon"></i></a>
        <a href="https://www.linkedin.com/in/helen-langridge-62b32b166/" target="_blank" rel="noopener noreferrer"><i class="devicon-linkedin-plain icon"></i></a>
        <a href="https://twitter.com/HelenCycling" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter icon"></i></a>
        <a href="https://www.instagram.com/helen.langridge/"><i class="fa-brands fa-instagram icon"></i></a>
      </div>

    </footer>
  )
}

export default Footer