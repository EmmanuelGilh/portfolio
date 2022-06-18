import React from 'react'
import logoE from '../../Media/logoE.png'
import './Loader.css'
import 'animate.css';

const Loader = () => {
    return (
        <div className='loader'>
            {/* <div className="loaderContainer"> */}
            <img src={logoE} alt='logoE' className='animate__animated animate__flash' />
            {/* </div> */}
        </div>
    )
}

export default Loader