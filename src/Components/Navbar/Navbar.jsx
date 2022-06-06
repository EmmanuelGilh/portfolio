import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import Curriculum from '../../Media/EmmanuelEsp.pdf'




const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div className='navbar'>
            <a className='tags' onClick={() => navigate('/')}>
                Home
            </a >
            <a className='tags'
                href={Curriculum}
            // download='CV-EmmanuelGil'
            >
                CV
            </a>
            <a className='tags' onClick={() => navigate('/portfolio')}>
                Portfolio
            </a>
            {/* <a className='tags'>
                Contact
            </a> */}
        </div>
    )
}

export default Navbar