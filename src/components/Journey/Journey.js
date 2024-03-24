import React from 'react'
import "./journey.css"
import data from "./data"
import { LuCheckCircle } from "react-icons/lu";
import { Link } from 'react-scroll';

const Journey = () => {
  return (
    <div className='journey' id='plans'>
        <div className='journey-left'>
            <span>READY TO START</span>
            <span>YOUR JOURNEY </span>
            <span>NOW WITH US</span>
        </div>
        <div className='journey-rigth'>
          {
           data.map((pro)=>(
            <div className='jurn-card'>
                <span>{pro.icon}</span>
                <h1>{pro.title}</h1>
                <span>{pro.price}</span>
                {
                pro?.des.map((ele)=>(
                    <p><LuCheckCircle/>{ele}</p>
                ))
                }
               <h6>See more benifits</h6>
               <Link spy={true} to="join" smooth={true}><button>JOIN NOW</button></Link>
                </div> 
           ))  
          }
        </div>
    </div>
  )
}

export default Journey