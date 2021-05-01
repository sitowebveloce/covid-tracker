import React from 'react';
import Corona from './imgs/coronavirus.svg';

const Header = () => {
    return (
        <header>
         <img className='corona-logo' src={Corona} alt=""/> <h2>Covid Tracker</h2> 
        </header>
    )
}


export default Header
