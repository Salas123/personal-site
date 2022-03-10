import React, {useState} from "react";
import './ContactMeSection.css';
import ButtonIconComponent from "./Button/ButtonIconComponent";



function ContactMeSection(){

    const [form, setForm] = useState({
        email: "",
        fullName: "",
        message: "",
    });



    function formVerification(){
        if(form.fullName === '') {window.alert('Must Enter A Name, Would Love To Know Who I\'m Talking To!'); return false;}
        if(form.email === "" || !emailVerification()){window.alert('Must enter an email!'); return false;}
        if(form.message === "") {window.alert('Must enter a message, would love to hear what you have to say!'); return false;}

        console.log('full name:%s email:%s message:%s', form.fullName, form.email, form.message);

        return true;
    }

    function emailVerification() {
        let email_str = form.email;
        const email_arr = email_str.split('@');
        return email_arr.length > 1;
    }


    function updateForm(value){
        return setForm((prev) => {
            return {...prev, ...value};
            }
        );
    }

    async function emailSend()
    {

        if(formVerification() === false)
            return;


        console.log('Email send button pressed!');

        const newForm = {...form};

        await fetch("http://localhost:5000/namesAndEmails/add",
            {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newForm),
            })
            .catch(error =>{
                console.log(error.toJSON);
            })
            .then((res) => console.log(res));


        await fetch("http://localhost:5000/fullForm/add",
            {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newForm),
            })
            .catch(error =>{
                console.log(error.toJSON);
            })
            .then((res) => console.log(res));

            setForm({fullName: "", email: "", message: ""});

            console.log('fullName:%s, email:%s, message:%s ', form.fullName, form.email, form.message);

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
                                <div className={'inputContainer'}><input className={'singleRowInput'} defaultValue={'John Doe'} type='text' onChange={e => updateForm({fullName: e.target.value.toString()})}/></div>
                                <h2 className={'inputHeaders'}>Email</h2>
                                <div className={'inputContainer'}><input className={'singleRowInput'} defaultValue={'JohnDoe@email.com'} type='text' onChange={e => updateForm({email: e.target.value.toString()})} /></div>
                                <h2 className={'inputHeaders'}>Message</h2>
                                <div className={'inputContainer'}><textarea className={'messageInput'} defaultValue={'Enter Message Here'}  rows={2} cols={50} onChange={e => updateForm({message: e.target.value.toString()})}/></div>
                            </form>
                            <div className={'ContactMeBottomRightPanel'}>
                                <ButtonIconComponent buttonText={'Send Message'} src={'send-icon.svg'} alt={'send icon'} onClick={emailSend}/>
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
