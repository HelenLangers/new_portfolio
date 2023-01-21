import React from 'react'
import './Cycling.css'
import AnimateWriting from '../../Components/TypeAnimation/AnimateWriting'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

// Images
import LEJOG from '../../Assets/Images/LEJOG.jpg'
import RTW from '../../Assets/Images/RTW.jpg'

const CyclingLanding = () => {

    const writingSequence = [
        'Cycling Adventures', 1000]

  return (
    <>
      <NavBar/>

      <section className='cycling-page-body'>
        <div className='title-section'>
          <AnimateWriting writingSequence={writingSequence}/>
        </div>

        <div className='cycling-intro'>
          I've been on some cool trips I filmed and/or blogged about. So for the sake of keeping everything in one place, I've linked to them both here.
        </div>

        <div className='blocks-section'>
          <div className='adventure-block'>
            <h3>Lands End to John O'Groats</h3>
            <p>While bike commuting in London, I was hit by a car and suffered some mild concussion. Considering I landed on my head, I was really lucky! While the physical injuries faded, I became really nervous about junctions, but I didn't want to stop cycling as I'd found it so beneficial to my mental and physical health. So for motivation, I signed up to do a 60 mile sportive in Kent which I really enjoyed. There was something about cycling with others that filled me with joy and the sense of accomplishment just compounded that.</p>
            <p>After that, I signed up to do the British Heart Foundation's London to Paris bike ride which was my first time cycling abroad. I couldn't believe how satisfying it was of doing these multi-day rides but there was something about having every turn signposted that made me want to head off on my own and explore. I wanted to have the freedom of just travelling. As soon as I got home from Paris, I started planning my own journey from Lands End to John O'Groats in the UK. I started turning the pedals in September 2015.</p>
            <p>It's a well known route, but with no defined path. Even Audax UK allows you a 'free route'. I decided to make it a nice round 1000 miles and have two weeks off work to do it. In the end, it took me 13 days of riding with one rest day and it was everything I had hoped it would be. It was my biggest challenge yet, but it was such a great way of seeing my home country.</p>
            <img src={LEJOG} alt="Lands End to John O'Groats" className='adventure-image'/>
              <div className='button-box'>
                <a className='button-link' href="/cycling/lejog">Read the blog</a>
              </div>
          </div>

          <div className='adventure-block'>
            <h3>Around the World</h3>
            <p>Not long after moving to Glasgow in 2015, I met my now-husband and on our second date we started planning our round the world cycle adventure. We both wanted to ride around the world, and after meeting it felt like there really wasn't any reason not to do it together. After 14 months of working two jobs each, saving every penny and selling most of our belongings, we left Glasgow in April 2017. We were away for 17 months, visited 30 countries across 4 continents and rode approximately 30,000km. We had a separate website during the ride which we kept up to date, but I've since taken it down so you'll find all the blogs and videos through the link below.</p>
            <img src={RTW} alt="Cycling Around The World" className='adventure-image'/>
              <div className='button-box'>
                <a className='button-link' href="/cycling/around-the-world">Read the blog</a>
              </div>
          </div>
          
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default CyclingLanding