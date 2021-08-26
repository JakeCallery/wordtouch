import React from "react";
import '../styles/quickAccessWord.css';

const QuickAccessWord = ({word, onWordClick}) => {

    return (
        <button onClick={(evt) => {onWordClick(word)}} className={"quick-access-word"}>{word}</button>
    );
}

export default QuickAccessWord;