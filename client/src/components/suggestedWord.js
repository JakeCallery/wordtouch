import React from "react";
import '../styles/suggestedWord.css';

const SuggestedWord = ({word, onWordClick}) => {

    return (
        <button
            onClick={(evt)=>{onWordClick(word);}}
            className={"suggested-word"}>{word}</button>
    )
}

export default SuggestedWord;