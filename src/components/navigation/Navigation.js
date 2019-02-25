import React from 'react';
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <nav className='nav-bar pa1 br3 shadow-5' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('signout')} className='f3 link b dim orange underline pa3 pointer'>Sign Out</p>
                </nav>
            );
        } else {
            return (
                <nav className='nav-bar pa1 br3 shadow-5' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('signin')} className='f3 link b dim orange underline pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f3 link b dim orange underline pa3 pointer'>Register</p>
                </nav>
            );
    }
}

export default Navigation;