import React from "react";
import CardItem from "./CardItem";
const Cards = () =>{
    return(
        <div className='cards'>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <CardItem src="/images/cardImages/barcelona-streets.jpeg" label='Streets of Barcelona'>
                        Here is a picture of an average and beautiful day in the streets of Barcelona. Camera used: Sony Alpha 6000, Lens: 3.5-5.6
                    </CardItem>
                </div>

            </div>
        </div>
    );
}

export default Cards;