import React from 'react';
import './IntroSection.css';
import '../App.css';

function IntroSection(){

    /*
    * TODO:
    *  - Add more to introduction paragraph
    *
    *
    * */
    return(
      <div className='intro-container'>
          <video src='/videos/background-vid.mp4' autoPlay loop muted/>
          <div className='paragraph-container'>
              <h1 className='name-header'> Jesus Salas II </h1>
                  <p>
                      He is a first-generation son of two Mexican immigrants. He has grown up both in California and Minnesota. He holds his mother and brothers very close to him
                      as they have shaped him to be the person he is today.
                  </p>
                  <p>
                      Some of his accomplishments include receiving a scholarship for Latinos In Technology and
                      attending/graduating from UC Riverside with a Bachelors in Science: Computer Science. Some of his hobbies include snowboarding,
                      photography/filming, traveling, and long walks on the beach.
                  </p>
          </div>
      </div>
    );
}

export default IntroSection;