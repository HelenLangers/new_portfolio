import React from 'react';
import '../Styling/cycling.css';
import AnimateWriting from './AnimateWriting';
import RTW from '../Assets/RTW.jpg';
import LEJOG from '../Assets/LEJOG.jpg';

function Cycling() {

  const writingSequence = [
    'I love cycling', 1000]

  return (
    <div className='main-div-cycling'>
      <div className='title'>
        <AnimateWriting writingSequence={writingSequence}/>
      </div>
      <div className='cycling-intro'>I've been on some cool trips I filmed and/or blogged about. So for the sake of keeping everything in one place, I've linked to them both here.</div>
      <div className='cycling-block'>
        <div className='lejog-link-block'>
          <div className='block-inner'>
            <h3 className='event-title'>Lands End to John O'Groats</h3>
            <p className='paragraphs'>I started regular cycle commuting in London during the spring of 2012, and after an accident and subsequent concussion, I didn't want to be put off doing something that had brought me so much mental and physical wellbeing, so I started riding my bike for fun too.</p>
            <p className='paragraphs'>Cue a flurry of X to X events including London to Brighton, London to Cambridge, London to Dover and London to Paris. London to Paris was an organised 3 day ride for charity with all the turns sign posted, and I loved the joy you get form multi-day riding but wanted to choose where I went. Enter my next plan: the iconic UK end-to-end journey from Lands End to John O'Groats. I rode this solo over 13 days covering 1000 miles (there's no real official route) in September 2015.</p>
            <img className='rtwimage' src={LEJOG} alt="Lands end to john o'groats"/>
            <div className='blog-button-box'>
            <a className='blog-button-link' href="">Read the blog</a>
            </div>
          </div>
        </div>
        <div className='rtw-link-block'>
          <div className='block-inner'>
            <h3 className='event-title'>Round the World</h3>
            <p className='paragraphs'>Not long after moving to Glasgow, I met my now-husband and on our second date we started planning our round the world cycle adventure. We both wanted to ride around the world, and after meeting it felt like there really wasn't any reason not to do it together. After 14 months of working two jobs each, saving every penny and selling most of our belongings, we left Glasgow in April 2017. We were away for 17 months, visited 30 countries across 4 continents and rode approximately 30,000km (we weren't counting). We had a separate website during the ride which we kept up to date, but I've since taken it down and you'll find all the blogs and videos through the link below.</p>
            <img className='rtwimage' src={RTW} alt="cycling around the world"/>
            <div className='blog-button-box'>
            <a className='blog-button-link' href="">Read the blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cycling