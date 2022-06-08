import React from 'react'
import poke from '../../Media/poke.JPG'
import mobi from '../../Media/mobi.JPG'
import Bblogo from '../../Media/Bblogo.png'
import './Card.css'
import { useNavigate } from 'react-router-dom';




const Card = () => {




    return (
        <div className="containerCard">
            <div className="wrapperPort">

                <div className='cards'>
                    <img src={mobi} alt='mobi' className='imgCard' />
                    <a href='https://mobi-app.netlify.app/' target='_blank'>
                        <button > Mobi ATR</button>
                    </a>
                </div>

                <div className='cards'>
                    <img src={poke} alt='mobi' className='imgCard' />
                    <button> Pokedex </button>
                </div>

                <div className='cards'>
                    <img src={Bblogo} alt='breakingbad' className='imgCard' />
                    <a href='https://quotes-breakingbad-gilh.netlify.app' target='_blank'>
                        <button>Breaking Bad Quotes</button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Card