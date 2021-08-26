import React from 'react';
import ReactDOM from 'react-dom';
import OutputBar from "./components/outputBar";
import './styles/app.css';
import HorizontalKeys from "./components/horizontalKeys";
import SuggestionArea from "./components/suggestionArea";
import {useState} from "react";
import QuickAccessArea from "./components/quckAccessArea";
import Predictionary from "predictionary";

const predictionary = Predictionary.instance();

const App = () => {

    const [fieldText, setFieldText] = useState("");

    const onLetterClick = (letter) => {
        console.log('Letter Clicked: ', letter)
        setFieldText(fieldText + letter);
    }

    const onClearFieldClick = (evt) => {
        setFieldText('');
    }

    const onWordClick = (word) => {
        if(fieldText[fieldText.length-1] === ' ') {
            //predicting next word
            setFieldText(fieldText + word + ' ');
        } else {
            //completing word
            let tokens = fieldText.split(' ');
            tokens[tokens.length-1] = word;
            setFieldText(tokens.join(' ') + ' ');
        }
    }

    const quickAccessWordList = [
        "?",
        "!",
        "pain",
        "head",
        "left",
        "right",
        "ear",
        "throat",
    ];

    return (
        <div className={"app"}>
            <OutputBar fieldText={fieldText} onClearFieldClick={onClearFieldClick}/>
            <SuggestionArea input={fieldText} predictionary={predictionary} onWordClick={onWordClick}/>
            <QuickAccessArea wordList={quickAccessWordList} onWordClick={onWordClick}/>
            <HorizontalKeys onLetterClick={onLetterClick}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)