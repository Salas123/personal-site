import React from "react";
import './ContactMeSection.css';
import ButtonIconComponent from "./Button/ButtonIconComponent";

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
            <div className={'ContactMePanelWrapper'}>
                <div className={'ContactMePanel'}>
                    <div className={'ContactMeLeftPanel'}>
                        <h1 className={'ContactMeHeader'}>Contact Me</h1>
                        <img className={'contact-me-icon'} src={ 'contact-me-icon.svg'} alt={'Contact-Me-Icon'}/>
                    </div>
                    <div className={'ContactMeRightPanel'}>
                        <div className={'ContactMeBoxWrapper'}>
                            <form>
                                <h2 className={'inputHeaders'}>Name</h2>
                                <div className={'inputContainer'}><input className={'singleRowInput'} defaultValue={'John Doe'} type='text'/></div>
                                <h2 className={'inputHeaders'}>Email</h2>
                                <div className={'inputContainer'}><input className={'singleRowInput'} defaultValue={'JohnDoe@email.com'} type='text' /></div>
                                <h2 className={'inputHeaders'}>Message</h2>
                                <div className={'inputContainer'}><textarea className={'messageInput'} defaultValue={'Enter Message Here'}  rows={2} cols={50} onChange={adjustTextArea} /></div>
                            </form>
                            <div className={'ContactMeBottomRightPanel'}>
                                <ButtonIconComponent buttonText={'Send Message'} src={'send-icon.svg'} alt={'send icon'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'ContactMeFooter'}>
                    <p className={'socials-text'}>Checkout my socials!</p>
                    <div className={'icon-wrapper'}>
                        <a href={'https://www.instagram.com/chipsnsalas/'} className={'socialIcons'}><img src={'insta-icon.svg'} alt={'Instagram logo'} className={'icons'}/></a>
                        <a href={'https://www.linkedin.com/in/jesus-salas-a295a07a/'} className={'socialIcons'}><img src={'linkedIn-icon.svg'} alt={'LinkedIn logo'} className={'icons'}/></a>
                        <a href={'https://twitter.com/Jesus_Salads'} className={'socialIcons'}><img src={'twitter-icon.svg'} alt={'Twitter logo'} className={'icons'}/></a>
                        <a href={'https://github.com/Salas123'} className={'socialIcons'}><img src={'github-icon.svg'} alt={'Github logo'} className={'icons'}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMeSection;
