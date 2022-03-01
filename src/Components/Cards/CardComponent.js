import React from "react";
import './CardComponent.css';
import CardButton from "../Button/CardButton";

const CardComponent = (props) =>{
    return(
        <div className={'CardContainer'}>
            <div className={'cardOverlay'}/>
            <div className={'cardOverlayTextWrapper'}>
                {props.children}
                <CardButton buttonText={props.buttonText}/>
            </div>
            <div className={'imageCardContainer'}>
                <img src={props.photoUrl} alt={props.alt}/>
            </div>
        </div>
    );
}


export default CardComponent;
