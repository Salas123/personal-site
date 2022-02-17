import React from "react";
import './ContactMeSection.css';
import ButtonNoIconComponent from "./Button/ButtonNoIconComponent";


const ContactMeSection = () =>{
    return(
        <div className={'ContactMeSectionContainer'}>
            <div className={'middleGridContainer'}>
                <div className={'boxContainer'}>
                    <div className={'topBoxContainer'}>
                        <h1 className={'ContactMeHeader'}>Contact Me</h1>
                        <img className={'contact-me-icon'} src={ 'contact-me-icon.svg'} alt={'Contact-Me-Icon'}/>
                    </div>
                    <div className={'middleBoxContainer'}>
                        <h2>Email</h2>
                        <input value={'Enter Email Here'}/>
                        <h2>Message</h2>
                        <input value={'Enter Message Here'}/>
                        <ButtonNoIconComponent buttonText={'Send'}/>
                    </div>
                    <div className={'bottomBoxContainer'}>
                        <div className={'bottomBoxWrapper'}>
                            <p className={'socials-text'}>Checkout my socials!</p>
                            <img src={'insta-icon.svg'} alt={'Instagram logo'} className={'socialIcons'}/>
                            <img src={'linkedIn-icon.svg'} alt={'LinkedIn logo'} className={'socialIcons'}/>
                            <img src={'twitter-icon.svg'} alt={'Twitter logo'} className={'socialIcons'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMeSection;
