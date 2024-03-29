import React from "react";
import '../styles/letterButton.css';

const LetterButton = ({letter, onLetterClick}) => {

    return (
        <div className={"letter-button"}>
            <button onClick={(evt) => {onLetterClick(letter)}}>{letter}</button>
        </div>
    )

}

export default LetterButton;