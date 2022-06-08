import React from 'react'
import poke from '../../Media/poke.JPG'
import mobi from '../../Media/mobi.JPG'
import piedra from '../../Media/piedra.JPG'
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
                    <img src={piedra} alt='Piedra, papel o tijera' className='imgCard' />
                    <button>Piedra, papel o tijera</button>
                </div>

            </div>
        </div>
    )
}

export default Card