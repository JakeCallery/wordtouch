import React from "react";
import '../styles/spaceButton.css';

const SpaceButton = ({onLetterClick}) => {

    return (
        <button onClick={(evt) => {onLetterClick(" ")}} className={"space-button"}>SPACE</button>
    );

}

export default SpaceButton;