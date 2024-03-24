import React from 'react'
import "./testmonial.css"
import data from "./data"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import {motion} from 'framer-motion'


const Testimonial = () => {
    const [count,setCount]=useState(0)
    const transition ={type:"spring",duration:3}

    
  return (
    <div className='testmonial'>
       <div className='testmonial-left'>
        <span >TESTIMONIALS</span>
        <span>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.p
         key={count}
         initial={{opacity:0, x:-100}}
         animate={{opacity:1,x:0}}
         exit={{opacity:0,x:100}}
        >{data[count]?.review}</motion.p>
        <div className='left-bottome'>
            <div className='divbotm'><span>{data[count]?.name}:</span><span>{data[0].status}</span></div>
            <div className='leftright'>
                <FaArrowLeft style={{cursor:"pointer"}} onClick={()=>count===0?setCount(data.length-1):setCount((pre)=>pre-1)}/><FaArrowRight style={{cursor:"pointer"}}onClick={()=>{count===data.length-1 ? setCount(0):setCount((prev)=>prev+1)}}/>
            </div>     
        </div>
       </div>
       <div className='testimonial-right'>
            <motion.div 
            initial={{opacity:0,x:-100}}
            transition={{...transition,duration:3}}
            whileInView={{opacity:1,x:0}} 
            style={{
                '@media screen and (max-width: 768px)': {
                  initial: '100px', // Example style change for smaller screens
                  transition: { ...transition, duration: 2 }, // Apply transition within media query
                  whileInView: { left: '10px' } // Apply whileInView within media query
                }
              }}
              className='firstdive'
            ></motion.div>
            <motion.img
             key={count}
             initial={{opacity:0, x:100}}
             animate={{opacity:1,x:0}}
             exit={{opacity:0,x:-100}}
             src={data[count]?.image} className='image' alt=''/>
            <motion.div
             initial={{opacity:1, x:100}}
             transition={{...transition,duration:2}}
             whileInView={{opacity:1,x:0}}
             className='secondedive'></motion.div> 
       </div>
    </div>
  )
}

export default Testimonial