import React from "react";
import '../styles/horizontalKeys.css';
import LetterButton from "./letterButton";

const HorizontalKeys = (props) => {
    return (
        <div className={"horizontal-keys"}>
            <div>
                <LetterButton letter={"Q"}/>
                <LetterButton letter={"W"}/>
                <LetterButton letter={"E"}/>
                <LetterButton letter={"R"}/>
                <LetterButton letter={"T"}/>
                <LetterButton letter={"Y"}/>
                <LetterButton letter={"U"}/>
                <LetterButton letter={"I"}/>
                <LetterButton letter={"O"}/>
            </div>
            <div>
                <LetterButton letter={"P"}/>
                <LetterButton letter={"A"}/>
                <LetterButton letter={"S"}/>
                <LetterButton letter={"D"}/>
                <LetterButton letter={"F"}/>
                <LetterButton letter={"G"}/>
                <LetterButton letter={"H"}/>
                <LetterButton letter={"J"}/>
                <LetterButton letter={"K"}/>
                <LetterButton letter={"L"}/>
            </div>
            <div>
                <LetterButton letter={"Z"}/>
                <LetterButton letter={"X"}/>
                <LetterButton letter={"C"}/>
                <LetterButton letter={"V"}/>
                <LetterButton letter={"B"}/>
                <LetterButton letter={"N"}/>
                <LetterButton letter={"M"}/>
            </div>
        </div>

    )
}

export default HorizontalKeys;