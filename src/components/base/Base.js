import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./base.css"

const Base = () => {
  return (
    <div className='base'>
        <div className='social'>
         <FaInstagram className='inst'/>
         <FaLinkedinIn className='lin'/>
         <FaGithub className='git'/>
        </div>
        <hr/>
        <span>mdmodassar633@gmail.com</span>
    </div>
  )
}

export default Base