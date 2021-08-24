import React from "react";
import '../styles/letterButton.css';

const LetterButton = ({letter}) => {

    return (
        <div className={"letter-button"}>
            <button>{letter}</button>
        </div>
    )

}

export default LetterButton;