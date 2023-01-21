import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import AnimateWriting from '../../Components/TypeAnimation/AnimateWriting'
import lejogmap from '../../Assets/Images/lejogmap.jpg'
import Footer from '../../Components/Footer/Footer'

const LEJOG = () => {

  const writingSequence = ['Lands End to John O\'Groats', 1000]

  return (
    <>
      <NavBar/>

      <section className='blog-page-body'>
        <div className='title-section'>
          <AnimateWriting writingSequence={writingSequence}/>
        </div>

      <div className='hero-image-container'>
        <img src={lejogmap} className='cycling-hero-image'/>
      </div>

      <div className='accordian-section'>
        <p>Under construction!</p>
      </div>
      </section>

      <Footer/>
    </>
  )
}

export default LEJOG