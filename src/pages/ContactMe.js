import React from 'react';
import './ContactMe.css';
/*
* TODO:
*  - Resize profile pic sizes so they can fit within the contact me container
*
* */
const ContactMe = () =>
{

    return(
        <div className='contact-me'>

            <div className='contact-me-container'>
                <h1>CONTACT ME</h1>
                <i className="fas fa-envelope-open-text fa-2x"/>
            </div>
        </div>

    );
}

export default ContactMe;