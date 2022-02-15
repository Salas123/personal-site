import React from "react";
import './IntroSection.css';

const readAboutMeFunction = (props) =>{
    console.log('This button has been pressed!');
}


const IntroSection = () => {
    return(
        <div className={"IntroSectionContainer"}>
            <div className={"topContainer"}>
                <div className={"leftContainer"}>
                    <h1 className={"fullNameHeader"}>Jesus Salas II</h1>
                    <p  className={"personParaDescriptor"}>Software Engineer / Photographer</p>
                </div>
                <div className={"rightContainer"}>
                    <img className={'profilePic'} src={'profilePic.png'} alt="profile pic"></img>
                </div>
            </div>
            <div className={"bottomContainer"}>
                <div className={"buttonContainer"} onClick={readAboutMeFunction}>
                    <div className={"buttonTextContainer"}>
                        <p className={"buttonText"}>Read About Me</p>
                    </div>
                    <div className={"buttonIconContainer"}>
                        <img className={'buttonIcon'} src={'down-arrow.svg'}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
