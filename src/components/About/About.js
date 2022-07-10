import React from 'react';
import formal from './formal.jpg';
import './About.css';
function About(){
    return(
        <div>
            <div >
                <h2 className='about-btn'>About</h2>
            </div>
            <div className='impa-btn'>
                <div>
                <img src={formal} alt="hero-img" className='hero-img'/>
                </div>
                <div>
                    <p className='abt-para'>
                        Aiming to become the best data scientist and automate all the boring but 
                        important work by mygood skills in python using all my skills for the company 
                        and getting better together by learning new things and producing progress
                    </p>
                </div>
            </div>
        </div>
    );
}
export default About;
