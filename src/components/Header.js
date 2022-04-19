import React from 'react'
import { FaLinkedin, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";


export const Header = () => {
    return (
        <div>
            <header className='header'><span className='bold'>Jesutofunmi</span> Osunlana</header>
            <div className='contact'>
                <div className='contact-box'>
                    <FaEnvelope className='fa' />
                    <p>osunlanatofunmi@gmail.com</p>
                </div>
                <div className='contact-box'>
                    <FaPhoneSquareAlt className='fa' />
                    <p>2347066863194</p>
                </div>
                <div className='contact-box'>
                    <FaLinkedin className='fa' />
                    <p>linkedin.com/in/jesutofunmi-osunlana</p>
                </div>
            </div>
        </div>
    )
}
