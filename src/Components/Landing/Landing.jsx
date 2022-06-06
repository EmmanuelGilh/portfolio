import React from 'react'
import './Landing.css'
import me from '../../Media/Gilh.JPG'
import certificado from '../../Media/Herny.JPG'
import mail from '../../Media/mail.png'
import linked from '../../Media/linked.png'
import whats from '../../Media/whats.png'
import Divider from '@mui/material/Divider';
import Contact from './Contact';
import Intro from './Intro';



const Landing = () => {
    return (
        <div className='landingP'>
            <div className='i'>
                <div className='i_left'>
                    <div className='ileft_wrapper'>
                        <h2 className='i_hola'>Hola, mi nombre es</h2>
                        <h1 className='i_name'>Emmanuel Gil</h1>
                        <div className="i_title">
                            <div className="ititle_wrapper">
                                <div className="title_item">FullStack Web Developer</div>
                            </div>
                        </div>
                        <div className="i_description">
                            Soy una persona apasionada y con ganas de superarme en una empresa que me permita aprender, generar experiencia y crecer al mismo tiempo. Persiguiendo lo
                            anterior, decidí entrar al interminable mundo de la programación, el cual me ha permitido conocer y aplicar nuevas tecnologías en mis proyectos.
                        </div>
                    </div>
                </div>
                <div className='i_right'>
                    <div className="i_bg"></div>
                    <img src={me} alt='emmanuel' className='i_img' />
                </div>
            </div>
            <br />
            <Divider variant="middle" />
            <br />

            <div className='c'>
                {/* <div className='c_left'> */}
                {/* <div className='c_wrapper'> */}
                <img src={certificado} alt='certificado' className='c_img' />
                {/* </div> */}
            </div>
            <br />
            <Divider variant="middle" />
            <br />
            <div className='c_right'>
                <h1 className='c_title'> Contact me </h1>
                <div className="c_info">
                    <div className="c_info_item">
                        <img src={whats} alt="whats" className="c_icon" />
                        9999 07 69 54
                    </div>
                </div>
                {/* <div className="c_info"> */}
                <div className="c_info_item">
                    <img src={linked} alt="whats" className="c_icon" />
                    <a href='https://www.linkedin.com/in/emmanuelgilh/'>
                        https://www.linkedin.com/in/emmanuelgilh/
                    </a>
                </div>
                <div className="c_info">
                    <div className="c_info_item">
                        <img src={mail} alt="whats" className="c_icon" />
                        egil90@hotmail.com
                    </div>
                </div>
            </div>
        </div>
        // </div>
        // </div>
    )
}

export default Landing