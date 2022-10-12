import React from 'react'
import NavBar from './NavBar/NavBar';
import '../Styling/main.css';
import AnimateWriting from './AnimateWriting';
import timeline from '../Assets/timeline.png';
import aboutBlob from '../Assets/about-blog.svg';

function About() {

  const writingSequence = [
    'I am a career changer', 1000]

  return (
    <div className='main-view'>
      <div className='left-side'>
        <AnimateWriting writingSequence={writingSequence}/>
        <div className='code-clan-about'>
        <p >Hi, I'm Helen and I'm a career changer into software development based near Edinburgh.</p>
        <p>My formal education history is in history, archaeology and forensic anthropology. When I left University I worked as an assistant in a private medical lab. After moving to Glasgow to assist in moving an acquired laboratory over to our processes, I decided to take a career break and travel the world by bicycle for 17 months.</p>
        <p>On return, I worked in the outdoor retail industry and lead a team to research, design and launch this retailer's product sustainability strategy which is present online and in stores. Merging my joy and love for travel and cycling with this new appreciation of the difficulties surrounding sustainable business and the climate crisis, I'm passionate about making a career in the green-tech/clean-tech/climate-tech sectors.</p>
          <p>In July 2022, I started CodeClan's 16 week Professional Software Development bootcamp. This is an SQA accredited course which teaches the fundamentals of software development using Agile best practices, TDD and OOP. With over 800 hours of instructor-led and personal programming time, paired programming and practical projects, CodeClan gets driven career changes into the tech industry. But I didn't just learn how to code. Codeclan teaches growth mindset and encourages group work and a curiosity into the whys and the hows of programming.</p>
        </div>
      </div>
        <div className='righthand-side'>
          <img className='about-blob' src={aboutBlob}/>
          <img className='timeline' src={timeline}/>
      </div>
    </div>
  )
}

export default About