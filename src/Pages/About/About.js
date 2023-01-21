import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import AnimateWriting from "../../Components/TypeAnimation/AnimateWriting";
import "./About.css";
import {Link} from 'react-router-dom';
import timeline from '../../Assets/Images/career-timeline.png'

const About = () => {
  const aboutWriting = ["I'm changing career", 1000];

  return (
    <>
        <NavBar />

        <section className="about-page-body">
            <div className="left-side-about">
            <AnimateWriting writingSequence={aboutWriting} />

            <div className="about-section">
                <p>Hi, I'm Helen and I'm a career changer into software development based near Edinburgh.
                </p>
                <p>I've always been academic and have a masters degree in forensic anthropology from University College London. I wasn't ready to do a PhD so worked in a medical lab for 5 years and saved to go travelling. I left Glasgow in April 2017 and cycled about 30,000km through 33 countries over 17 months and I came back passionate about helping to improve people's lives and protecting the planet. I was made redundant from a small startup in the Scottish Borders during the pandemic, and decided to self-teach coding as it was the best way I could see how to both scratch that itch in my brain for mental challenges and fuel that passion I got from travelling.
                </p>
                <p>Before I booked into a bootcamp, I was headed hunted and offered a copywriting job in the outdoor retail industry where I had to quickly self teach the basics of coding for blogs. I discovered that it really was the right direction for me as I loved building something digitally tangible. In that job I also started learning about sustainability in business and supply chains and led a team to create that retailer's product sustainability policy that's now viewable in store and online.
                </p>

                <h2>CodeClan</h2>
                <p>In July 2022, I started <a href="https://codeclan.com/" target="_blank" rel="noopener noreferrer">CodeClan</a>'s 16 week Professional Software Development bootcamp. This is an SQA accredited course which teaches the fundamentals of software development using <strong>Agile</strong> best practices, <strong>TDD</strong> and <strong>OOP</strong>. With over 800 hours of instructor-led and personal programming time, paired programming and practical projects, CodeClan gets driven career changes into the tech industry. But I didn't just learn how to code. Codeclan teaches <strong>growth mindset</strong> and encourages group work and a curiosity into the whys and the hows of programming.
                </p>

                <h3>Topics covered at CodeClan:</h3>
                <ul className="list">
                    <li>Python and Flask</li>
                    <li>Javascript and React</li>
                    <li>Node.js and Express.js</li>
                    <li>The full MERN stack</li>
                    <li>Java and Spring</li>
                    <li>Git and GitHub</li>
                    <li>Database design and querying using SQL</li>
                    <li>NoSQL database design using MongoDB</li>
                    <li>Object Orientated Programming</li>
                    <li>API fetch and Promises</li>
                    <li>Test Driven Development including:</li>
                    <li className="sub-list">Unit testing</li>
                    <li className="sub-list">Mocha</li>
                    <li className="sub-list">Cypress</li>
                    <li className="sub-list">Jest</li>
                </ul>

                <p>Now I've graduated from CodeClan, I want to bring these two passions together to make a real impact on people's lives and be part of the green future of the planet.
                </p>

                <h2>Interests and Hobbies</h2>
                <p>Cycling is the obvious one here, but I'd say yes to most outdoor pursuits if given the opportunity (drawing the line at bungee jumping or sky diving... probably). After not doing much exercise during CodeClan, I'm getting back to fitness using the C25K running app and building up my cycling mileage in time to take part in an 800km ultra in May, and a 4200km ultra in August. Beyond being active, I love nothing more than a good book or film (I once had an unlimited cinema pass) and I can't wait to get back to travelling to new places... and not always by bike.
                </p>
                <p>I've done a couple of longer cycling adventures, and if it's your thing, then you can read the blogs and watch the videos through this link:
                </p>
            </div>

            <div className="cycling-button-box">
                <Link className="cycling-link" to="/cycling">Cycling Blogs & Vlogs</Link>
            </div>
        </div>

        <div className="right-side-about">
            <img src={timeline} alt="my career timeline" className="timeline"/>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
