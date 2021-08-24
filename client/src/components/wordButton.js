import React from 'react';
import '../styles/wordButton.css'

const WordButton = ({word}) => {

    return (
        <div className={"word-button"}>
            <button>{word}</button>
        </div>
    )
}

export default WordButton;