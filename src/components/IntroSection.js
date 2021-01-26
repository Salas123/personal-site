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
              <h1 className='name-header'> Jesus Salas II:</h1>
                  <p>
                       He is a son of two Mexican immigrants. He has grown up both in California and Minnesota. He holds his mother and brothers very close to him
                      as they have shaped him to be the person he is today. Some of his hobbies include snowboarding, photography/filming, and long walks on the beach.
                  </p>
          </div>
      </div>
    );
}

export default IntroSection;