import React from 'react'
import hero from "../../images/hero1.png"
import "./home.css"
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Home = () => {
  const transition = { type: 'spring', duration: 3 }
  return (
    <div className='home'>
      <div className='home-left'>
        <div className='top-section'>

          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
          <motion.div initial={{ left: '238px' }} whileInView={{ left: '8px' }} transition={transition} style={{ background: "rgba(255, 200, 0, 0.8)", height: "3rem", width: "5rem", borderRadius: "20px", position: "absolute", }}></motion.div>
        </div>
        <div className='title'><span>GOOD SHAPE FOR GOOD HELTH</span></div>
        <span className='span1'>We are here help to you make good sahpe body and care of your helth and live up your life to fullest </span>
        <div className='content'>
          <div className='content1'>
            <span>+<CountUp start={0} end={140} duration={4} /></span>
            <span>EXPERT COACHES</span>
          </div>
          <div className='content2'>
            <span>+<CountUp start={800} end={948} duration={4} /></span>
            <span>MEMBERS JOINED</span>
          </div>
          <div className='content3'>
            <span>+<CountUp start={0} end={50} duration={4} /></span>
            <span>FITNESS PROGRAM</span>
          </div>
        </div>
        <div className='buttons'>
          <button className='button1'>Get Started</button>
          <button className='button2'>Learn More</button>
        </div>


      </div>
      <div className='home-right'>
        <h1>hi</h1>
      </div>
      <img src={hero} alt='' />
    </div>
  )
}

export default Home