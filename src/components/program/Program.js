import React from 'react'
import "./program.css"
import { LuCheckCircle } from "react-icons/lu";
import  photo1 from "../../images/photo1.avif"
import photo2 from "../../images/photo3.avif"
import photo3 from "../../images/photo4.jpg"
import photo4 from "../../images/photo5.jpg"

const Program = () => {
  return (
    <div className='program' id="instraction">
        <div className='program-left' >
            <img className='photo1' src={photo4} alt=''  />
            <img className='photo2'  src={photo3} alt=''/>
            <img className='photo3'  src={photo1} alt='' />
            <img className='photo4'  src={photo2} alt=''/> 
        </div>
        <div className='program-right'>
         <span> SAME RESIONS</span>
         <h4>WHY CHOOSE  US<span style={{fontSize:"60px", color:"gold"}}> ?</span></h4>
         <span className='list'><LuCheckCircle style={{height:"30px",width:"30px", color:"gold"}}/> OVER 140+ EXPERT COACHS</span>
         <span className='list'><LuCheckCircle style={{height:"30px",width:"30px", color:"gold"}}/> TRAIN SMARTER AND FASTER THAN BEFOR</span>
         <span className='list'><LuCheckCircle style={{height:"30px",width:"30px", color:"gold"}}/> 1 FREE PROGRAM FOR NEW MEMBER</span>
         <span className='list'><LuCheckCircle style={{height:"30px",width:"30px", color:"gold"}}/> RELIABLE PARTNERS</span>
        </div>
    </div>
  )
}

export default Program