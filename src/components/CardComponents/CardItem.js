import React from "react";


const CardItem = (props) =>{
    return(
        <div className='cards-item-container'>
            <div className="image-description-container">
                <p className='image-description-text'>{props.children}</p>
            </div>
        </div>
    );
}

export default CardItem;