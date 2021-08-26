import React from "react";
import '../styles/suggestedWord.css';

const SuggestedWord = ({word}) => {

    return (
        <div className={"suggested-word"}>{word}</div>
    )
}

export default SuggestedWord;