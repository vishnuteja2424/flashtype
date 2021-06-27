import React from 'react';
import hero from './../../assets/hero.png';
import './Landing.css';
import Typewriter from 'typewriter-effect';



const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-left">
                <h1 className="landing-header">Can you type . . .</h1>
                <div className="typewriter-container">
                    <Typewriter
                    options={{
                        strings: ['Fast?', 'Correct?', 'Quick?'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
            </div>

            <div className="landing-right">
                <img className="flash-image" src={hero} alt="hero-image"/>
            </div>
        </div>
    );
}

export default Landing;