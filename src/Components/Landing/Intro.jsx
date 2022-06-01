import React from 'react'
import './Intro.css'
import me from '../../Media/Gilh.JPG'


function Intro() {
    return (
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
    )
}

export default Intro