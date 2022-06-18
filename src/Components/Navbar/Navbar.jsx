import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import Curriculum from '../../Media/EmmanuelEsp.pdf'




const Navbar = ({ contacto }) => {
    const navigate = useNavigate()


    const scrollToSection = (eRef) => {
        window.scrollTo({
            top: eRef.current.offsetTop,
            behavior: 'smooth'
        })
        console.log(eRef)
    }


    return (
        <div className='navbar'>
            <a className='tags' onClick={() => navigate('/')}>
                Home
            </a >
            <a className='tags'
                href={Curriculum}
                target='_blank'
            // download='CV-EmmanuelGil'
            >
                CV
            </a>
            <a className='tags' onClick={() => scrollToSection(contacto)}>
                Contact
            </a>
            <a className='tags' onClick={() => navigate('/portfolio')}>
                Portfolio
            </a>
        </div>
    )
}

export default Navbar