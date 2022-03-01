import React from "react";
import './CardButton.css';

const CardButton = (props) => {
  return(
      <div className={'CardButtonContainer'}>
          <div className={'CardButtonWrapper'}><p className={'CardButtonText'}>{props.buttonText}</p></div>
      </div>
  );
}


export default CardButton;
