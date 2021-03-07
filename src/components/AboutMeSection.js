import React from 'react';
import './AboutMeSection.css';

const AboutMeSection = () =>{
    return(
        <div className='about-me-container' id="AboutMeSection">
            <h1 className='about-me-header'>ABOUT ME</h1>
            <div className='container-divider'/>
            <div className='about-me-text-container'>
                <p>
                    I am a son of two Mexican immigrants. Both worked to give us the lives my brothers and I grew up to love and cherish. I grew up both in California and Minnesota.
                    Some of my proudest accomplishments include receiving a scholarship for Latinos In Technology and
                    attending/graduating from UC Riverside with a Bachelors in Science: Computer Science. While I have a background in engineering in, I hold my
                    short videos and photography very close to me as I am always trying to create.
                </p>
            </div>
        </div>
    );
}


export default AboutMeSection;