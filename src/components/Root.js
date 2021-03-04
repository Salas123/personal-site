import React from "react";
import Navbar from "./Navbar/Navbar";
import IntroSection from "./IntroSection";
import AboutMeSection from "./AboutMeSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import './Root.css';

const Root = () =>{
    return(
        <div className='root-container'>
            <Navbar/>
            <video type="video/mp4" src="/videos/background-vid.mp4" playsInline autoPlay muted loop/>
            <IntroSection/>
            <AboutMeSection/>
            <ProjectsSection/>
            <ContactMeSection/>
        </div>
    );
}

export default Root;