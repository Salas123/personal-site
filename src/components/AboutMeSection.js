import React from 'react';
import './AboutMeSection.css';

const AboutMeSection = () =>{
    return(
        <div className='about-me-container' id="AboutMeSection">
            <h1 className='about-me-header'>ABOUT ME</h1>
            <div className='container-divider'/>
            <div className='about-me-text-container'>
                <p>
                    I am a first-generation son of two Mexican immigrants. I grew up both in California and Minnesota.
                </p>
                <p>
                    Some of my accomplishments include receiving a scholarship for Latinos In Technology and
                    attending/graduating from UC Riverside with a Bachelors in Science: Computer Science. While I have a profound interest in computer interest, my other interests
                    involve creating shorts
                </p>
            </div>
        </div>
    );
}


export default AboutMeSection;