import React from "react";
import '../styles/quickAccessArea.css';
import QuickAccessWord from "./quickAccessWord";
const QuickAccessArea = ({wordList, onWordClick}) => {
    return(
        <div className={"quick-access-area"}>
            {wordList.map((word) => {
                return (
                    <QuickAccessWord word={word} onWordClick={onWordClick}/>
                )
            })}
        </div>
    )
}

export default QuickAccessArea;