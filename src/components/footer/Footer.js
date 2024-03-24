import React from 'react'
import "./footer.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Footer = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_phgp4zl', 'template_l073gsf', form.current, 'MH8rMdaD90Fhdg-yF')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='footer' id="join">
            <div className='footer-left'>
                <span>READY TO LEVEL UP</span>
                <span>YOUR BODY WITH US</span>
            </div>
            <div className='footer-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name' />
                    <input type='email' name='user_email' className='user' placeholder='Email' />
                    <textarea type='message' name="message" className='m-user' rows={4}
                        style={{
                            height: '100px',
                            resize: 'none',
                            width: "300px",
                            paddingTop: '0px', // Optional: Add padding for visual appeal
                            paddingLeft: '0px'
                        }} placeholder='Message' />
                    <input type='submit' value="Send" className='button' />
                    <span>{done && "Thanks for Conacting me"}</span>
                    <div
                        className='blur c-blur'
                        style={{ background: "var(--purple)" }}
                    >

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Footer