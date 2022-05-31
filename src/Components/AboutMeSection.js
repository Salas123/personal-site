import React from 'react';
import './AboutMeSection.css';
import ButtonIconComponent from "./Button/ButtonIconComponent";
import {API} from 'aws-amplify';


function AboutMeSection(){
    async function download_resume() {

        let windowInstance = window.open();

        await API.get('DownloadResumeAPI', '/downloadresume',{})
            .then(res =>{
                console.log(res);
                windowInstance.location = res.result})
            .catch(err =>
            {
                console.error(err);
                windowInstance.close();
            });

    }

    return(
        <div className={'AboutMeSectionContainer'}>
            <div className={'AboutMeTopContainer'}>
                <div className={'AboutMeLeftContainer'}>
                    <div className={'AboutMeTextWrapper'}>
                        <h1 className={'AboutMeParagraphHeader'}>Hey there,</h1>
                        <p className={'AboutMeParagraph'}>
                            My name is Jesus Salas II. I made this page initially as a resume buffer, however, upon further reflection I realize I
                            have the chance to create a platform around myself. I am proud to say that I graduated with my bachelors of science in computer science from
                            UC Riverside where I worked on some great embedded systems projects. Since graduation, I have taken it upon myself to learn more about full stack as
                            well as continuing my non-engineering projects in photography and video editing.
                        </p>
                        <p className={'AboutMeParagraph'}>
                            I love to create and I love the collaborative process that comes with it. I find the idea of a shared vision and optimism to create
                            something that generates inspiration in others to do same as a rewarding endeavor. My goal in this platform is to hopefully continue to pursue that endeavor and to hopefully meet with others down the line to collaborate on shared projects.
                        </p>
                    </div>
                </div>
                <div className={'AboutMeRightContainer'}>
                    <h1 className={'AboutMeHeader'}>About Me</h1>
                    <div className={'ButtonHolder'}>
                        <ButtonIconComponent buttonText={'Download Resume'} src={'artifacts/file-download-icon.svg'} alt={'download icon'} onClick={download_resume}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection;
