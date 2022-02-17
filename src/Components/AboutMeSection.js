import React from 'react';
import './AboutMeSection.css';
import ButtonIconComponent from "./Button/ButtonIconComponent";

const AboutMeSection = () =>{
    return(
        <div className={'AboutMeSectionContainer'}>
            <div className={'topContainer'}>
                <div className={'AboutMeLeftContainer'}>
                    <p className={'AboutMeParagraph'}>
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                        Hello There This Is Sample Text Hello There This Is Sample Text Hello There This Is Sample Text
                    </p>
                </div>
                <div className={'AboutMeRightContainer'}>
                    <h1 className={'AboutMeHeader'}>About Me</h1>
                    <div className={'ButtonHolder'}>
                        <ButtonIconComponent buttonText={'Download Resume'} src={'file-download-icon.svg'} alt={'download icon'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection;
