import React from 'react';
import './ContactMeSection.css';

const ContactMeSection = () =>{
    return(
        <div className='contact-container' id="ContactMeSection">
            <h1 className='contact-me-header'>CONTACT ME</h1>
            <div className='container-divider'/>
            <div className='contact-me-text-container'>
                <p>
                    I am always looking for interesting projects to collaborate on. For any ideas, inquiries, or to view my resume
                    please email here and I'll get back to you!
                </p>
                <p>
                    Email: email goes here
                </p>
            </div>
        </div>
    );
}

export default ContactMeSection;