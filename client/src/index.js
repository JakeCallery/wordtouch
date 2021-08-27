import React from 'react';
import ReactDOM from 'react-dom';
import OutputBar from "./components/outputBar";
import './styles/app.css';
import HorizontalKeys from "./components/horizontalKeys";
import SuggestionArea from "./components/suggestionArea";
import {useState} from "react";
import QuickAccessArea from "./components/quckAccessArea";
import Predictionary from "predictionary";
import { setVisibleHeight } from 'visible-height-css'

setVisibleHeight('vih')
const predictionary = Predictionary.instance();

const App = () => {

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.document.addEventListener('touchmove', e => {
            if(e.scale !== 1) {
                e.preventDefault();
            }
        }, {passive: false});
    }

    const [fieldText, setFieldText] = useState("");

    const onLetterClick = (letter) => {
        console.log('Letter Clicked: ', letter)
        setFieldText(fieldText + letter);
    }

    const onClearFieldClick = (evt) => {
        setFieldText('');
    }

    const onWordClick = (word) => {
        word = word.toUpperCase();
        if(fieldText[fieldText.length-1] === ' ') {
            //TODO: predicting next word
            setFieldText(fieldText + word + ' ');
        } else {
            //completing word
            let tokens = fieldText.split(' ');
            tokens[tokens.length-1] = word;
            setFieldText(tokens.join(' ') + ' ');
        }
    }

    const onBackspaceClick = (evt) => {
        //If ends in space, clear whole word
        const lastChar = fieldText[fieldText.length-1];
        if(lastChar === ' ') {
            let tokens = fieldText.split(' ');
            tokens.pop();  //Drop trailing space
            tokens.pop(); //Drop last element
            setFieldText(tokens.join(' ') + ' ');
        } else {
            //If ends in letter, clear last letter
            let tokens = fieldText.split('');
            tokens.pop();
            setFieldText(tokens.join(''));
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
            <OutputBar
                fieldText={fieldText}
                onClearFieldClick={onClearFieldClick}
                onBackspaceClick={onBackspaceClick}
            />
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