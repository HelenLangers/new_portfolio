import React from 'react'
import '../Styling/main.css';
import AnimateWriting from './AnimateWriting';
import timeline from '../Assets/timeline.png';
import {Link} from 'react-router-dom';

function About() {

  const writingSequence = [
    'I\'m changing career', 1000]

  return (
    <div className='main-view'>
      <div className='left-side-about'>
        <AnimateWriting writingSequence={writingSequence}/>
        <div className='code-clan-about'>
        <p >Hi, I'm Helen and I'm a career changer into software development based near Edinburgh.</p>
        <p>My formal education history is in history, archaeology and forensic anthropology. When I left University I worked as an assistant in a private medical lab. After moving to Glasgow to assist in moving an acquired laboratory over to our processes, I decided to take a career break and travel the world by bicycle for 17 months.</p>
        <p>On return, I worked for a Scottish outdoor retailer and lead a team to research, design and launch their new product sustainability strategy which is present online and in stores. Merging my joy and love for travel and cycling with this new appreciation of the difficulties surrounding sustainable business and the climate crisis, I'm passionate about making a career in the <strong>green-tech/clean-tech/climate-tech</strong> sectors.</p>
        <h2>CodeClan</h2>
          <p>In July 2022, I started <a href="https://codeclan.com/" target="_blank" rel="noopener noreferrer">CodeClan</a>'s 16 week Professional Software Development bootcamp. This is an SQA accredited course which teaches the fundamentals of software development using <strong>Agile</strong> best practices, <strong>TDD</strong> and <strong>OOP</strong>. With over 800 hours of instructor-led and personal programming time, paired programming and practical projects, CodeClan gets driven career changes into the tech industry. But I didn't just learn how to code. Codeclan teaches <strong>growth mindset</strong> and encourages group work and a curiosity into the whys and the hows of programming.</p>
          <h3>Topics covered at CodeClan:</h3>
          <div className='list-container'>
          <ul className='list'>
            <li>Python and Flask</li>
            <li>Javascript and Node.js</li>
            <li>React</li>
            <li>MERN stack</li>
            <li>Java and Spring</li>
            <li>Git and GitHub</li>
            <li>Database design and querying using SQL</li>
            <li>NoSQL database design using MongoDB</li>
            <li>Object Orientated Programming</li>
            <li>API fetch and Promises</li>
            <li>Test Driven Development including:</li>
            <li className='sub-list'>Unit testing</li>
            <li className='sub-list'>Mocha</li>
            <li className='sub-list'>Cypress</li>
          </ul>
          </div>
          <h2>Interests and Hobbies</h2>
          <p>Cycling is the obvious one here, but I'd say yes to most outdoor pursuits if given the opportunity (drawing the line at bungee jumping or sky diving... probably). After not doing much exercise during CodeClan, I'm getting back to fitness using the C25K running app and building up my cycling mileage in time to take part in an 800km ultra in May. Beyond being active, I love nothing more than a good book or film (I once had an unlimited cinema pass) and I can't wait to get back to travelling to new places... and not always by bike.</p>
          <p>I've done a couple of longer cycling adventures, and if it's your thing, then you can read the blogs and watch the videos through this link:</p>
        </div>
        <div className='buttons-flex'>
          <div className='cycling-button-box'>
            <Link className='cycling-link' to="/cycling">Cycling Blogs & Vlogs</Link>
          </div>
        </div>
        </div>
        <div className='right-side-about'>
          <img className='timeline' src={timeline} alt="my timeline up to now"/>
      </div>
    </div>
  )
}

export default About