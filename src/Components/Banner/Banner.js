import React from 'react';
import './Banner.css'

function Banner(props) {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner-buttons'>
                    <button className='button'>play</button>
                    <button className='button'>play</button>
                </div>
                 <h1 className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</h1>
                 
            </div>
            <div className="fade-bottom"></div>
            
        </div>
    );
}

export default Banner;