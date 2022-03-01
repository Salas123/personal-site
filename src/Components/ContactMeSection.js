import React from "react";
import './ContactMeSection.css';
import ButtonNoIconComponent from "./Button/ButtonNoIconComponent";

const ContactMeSection = () =>{
    function adjustTextArea(e){
        let message = e.target.value;
        if(message.length > 0){
            e.target.rows = 4;
        }
        else{
            e.target.rows = 2;
        }
    }

    return(
        <div className={'ContactMeSectionContainer'}>
            <div className={'middleGridContainer'}>
                <div className={'boxContainer'}>
                    <div className={'topBoxContainer'}>
                        <h1 className={'ContactMeHeader'}>Contact Me</h1>
                        <img className={'contact-me-icon'} src={ 'contact-me-icon.svg'} alt={'Contact-Me-Icon'}/>
                    </div>
                    <div className={'middleBoxContainer'}>
                        <form>
                            <h2 className={'inputHeaders'}>Email</h2>
                            <input className={'emailInput'} defaultValue={'Enter Email Here'} type='text' />
                            <h2 className={'inputHeaders'}>Message</h2>
                            <textarea className={'messageInput'} defaultValue={'Enter Message Here'} rows={2} cols={50} onChange={adjustTextArea} />
                        </form>
                        <ButtonNoIconComponent buttonText={'Send'}/>
                    </div>
                    <div className={'bottomBoxContainer'}>
                        <div className={'bottomBoxWrapper'}>
                            <p className={'socials-text'}>Checkout my socials!</p>
                            <a href={'https://www.instagram.com/chipsnsalas/'}><img src={'insta-icon.svg'} alt={'Instagram logo'} className={'socialIcons'}/></a>
                            <a href={'https://www.linkedin.com/in/jesus-salas-a295a07a/'}><img src={'linkedIn-icon.svg'} alt={'LinkedIn logo'} className={'socialIcons'}/></a>
                            <a href={'https://twitter.com/Jesus_Salads'}><img src={'twitter-icon.svg'} alt={'Twitter logo'} className={'socialIcons'}/></a>
                            <a href={'https://github.com/Salas123'}><img src={'github-icon.svg'} alt={'Github logo'} className={'socialIcons'}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMeSection;
