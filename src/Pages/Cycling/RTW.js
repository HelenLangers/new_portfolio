import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import AnimateWriting from '../../Components/TypeAnimation/AnimateWriting'
import worldmap from '../../Assets/Images/worldmap.jpg'
import Footer from '../../Components/Footer/Footer'

const RTW = () => {

  const writingSequence = ['30,000km Around The World', 1000]
  
  return (
    <>
    <NavBar/>

    <section className='blog-page-body'>
      <div className='title-section'>
        <AnimateWriting writingSequence={writingSequence}/>
      </div>

    <div className='hero-image-container'>
      <img src={worldmap} className='cycling-hero-image'/>
    </div>

    <div className='accordian-section'>
      <p>Under construction!</p>
    </div>
    </section>

    <Footer/>
  </>
  )
}

export default RTW