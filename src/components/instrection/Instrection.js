import React from 'react'
import "./instrection.css"
import data from "./inst-data"
import { FaArrowRight } from "react-icons/fa6";
const Instrection = () => {
  console.log(data)
  return (
    <div className="instrection" id='program'>
     <div className='inst-title'>
       <span>EXPLORE OUR</span>
       <span>PROGRAM</span>
       <span>TO YOUR HELTH</span>
     </div>
     <div className='inst-cards'>
       {
        data.map((pro)=>(
          <div className='card'>
          <span>{pro.icon}</span>
          <h3>{pro.title}</h3>
          <p>{pro.des}</p>
          <span>JOIN NOW <FaArrowRight/></span>
          </div>
        ))
       }
     </div>
    
    </div>
  )
}

export default Instrection