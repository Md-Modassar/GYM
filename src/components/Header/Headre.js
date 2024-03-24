import React from 'react'
import "./header.css"
import { FaAlignJustify } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import { Link } from 'react-scroll';

const Headre = () => {
  const [mobile, setMobile] = useState(false)

  return (
    <div className='header'>
      <div className='logo'>
        <span>TOTAL</span>
        <span>GYM</span>
      </div>
      {
        mobile ? (<div className='mobile-option'>
          <Link spy={true} to='home' smooth={true} activeClass='activeClass'><span>Home</span></Link>
          <Link spy={true} to='program' smooth={true}><span>Program</span></Link>
          <Link spy={true} to="instraction" smooth={true}><span>Us</span></Link>
          <Link spy={true} to='plans' smooth={true}><span>Plans</span></Link>
          <Link span={true} to='testmonial' smooth={true}><span>Testimonial</span></Link>
        </div>) : (<div className='option'>
          <Link spy={true} to='home' smooth={true} activeClass='activeClass'><span>Home</span></Link>
          <Link spy={true} to='program' smooth={true}><span>Program</span></Link>
          <Link spy={true} to="instraction" smooth={true}><span>Us</span></Link>
          <Link spy={true} to='plans' smooth={true}><span>Plans</span></Link>
          <Link span={true} to='testmonial' smooth={true}><span>Testimonial</span></Link>
        </div>)
      }
      {
        mobile ? (<ImCross onClick={() => setMobile(!mobile)} style={{ height: "30px", width: "30px" }} />) : (
          <FaAlignJustify className="menu" onClick={() => setMobile(!mobile)} style={{ height: "30px", width: "30px" }} />
        )
      }
      <div className='h-button'>
        <Link spy={true} to="join" smooth={true}><button>Join Now</button></Link>
      </div>
    </div>
  )
}

export default Headre