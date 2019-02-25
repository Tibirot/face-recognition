import React from 'react';
import Tilt from 'react-tilt'
import face from './Logo.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className='logo-bar ma4 mt1'>
            <Tilt className="Tilt br4 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa2"><img className='logo-img' style={{paddingBottom: '4px'}} alt='logo' src={face} /></div>
            </Tilt>
        </div>
    )
}

export default Logo;