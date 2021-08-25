import React from "react";
import '../styles/horizontalKeys.css';
import LetterButton from "./letterButton";
import SpaceButton from "./spaceButton";

const HorizontalKeys = (props) => {
    return (
        <div className={"horizontal-keys"}>
            <div>
                <LetterButton letter={"1"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"2"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"3"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"4"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"5"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"6"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"7"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"8"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"9"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"0"} onLetterClick={props.onLetterClick}/>
            </div>
            <div>
                <LetterButton letter={"Q"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"W"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"E"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"R"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"T"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"Y"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"U"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"I"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"O"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"P"} onLetterClick={props.onLetterClick}/>
            </div>
            <div>
                <LetterButton letter={"A"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"S"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"D"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"F"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"G"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"H"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"J"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"K"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"L"} onLetterClick={props.onLetterClick}/>
            </div>
            <div>
                <LetterButton letter={"Z"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"X"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"C"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"V"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"B"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"N"} onLetterClick={props.onLetterClick}/>
                <LetterButton letter={"M"} onLetterClick={props.onLetterClick}/>
            </div>
            <div>
                <SpaceButton onLetterClick={props.onLetterClick}/>
            </div>
        </div>

    )
}

export default HorizontalKeys;