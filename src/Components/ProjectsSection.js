import React from "react";
import './ProjectsSection.css';

const ProjectsSection = () =>{
    return(
        <div className={'ProjectsSectionContainer'}>
            <div className={'ProjectsBoxContainer'}>
                <div className={'ProjectsTopBoxContainer'}>
                    <h1 className={'ProjectsHeader'}>Projects</h1>
                </div>
                <div className={'ProjectsMiddleBoxContainer'}>
                    <ul className={'ProjectsListWrapper'}>
                        <li className={'ProjectsElement'}>Project1</li>
                        <li className={'ProjectsElement'}>Project2</li>
                        <li className={'ProjectsElement'}>Project3</li>
                        <li className={'ProjectsElement'}>Project4</li>
                    </ul>
                </div>
                <div className={'ProjectsBottomBoxContainer'}>

                </div>
            </div>

        </div>
    );
}


export default ProjectsSection;
