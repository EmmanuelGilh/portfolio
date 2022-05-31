import React from 'react'
import './Contact.css'
import certificado from '../../Media/Herny.JPG'
import mail from '../../Media/mail.png'
import linked from '../../Media/linked.png'
import whats from '../../Media/whats.png'



const Contact = () => {
    return (
        <div className='c'>
            <div className='c_left'>
                <div className='c_wrapper'>
                    <img src={certificado} alt='certificado' className='c_img' />
                </div>
            </div>
            <div className='c_right'>
                <h1 className='c_title'> Contact me </h1>
                <div className="c_info">
                    <div className="c_info_item">
                        <img src={whats} alt="whats" className="c_icon" />
                        9999 07 69 54
                    </div>
                </div>
                <div className="c_info">
                    <div className="c_info_item">
                        <img src={linked} alt="whats" className="c_icon" />
                        https://www.linkedin.com/in/emmanuelgilh/
                    </div>
                </div>
                <div className="c_info">
                    <div className="c_info_item">
                        <img src={mail} alt="whats" className="c_icon" />
                        egil90@hotmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact