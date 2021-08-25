import React from 'react';
import ReactDOM from 'react-dom';
import OutputBar from "./components/outputBar";
import './styles/app.css';
import HorizontalKeys from "./components/horizontalKeys";
import SuggestionArea from "./components/suggestionArea";
import {useState} from "react";
import QuickAccessArea from "./components/quckAccessArea";

const App = () => {

    const [fieldText, setFieldText] = useState("");

    const onLetterClick = (letter) => {
        console.log('Letter Clicked: ', letter)
        setFieldText(fieldText + letter);
    }

    const onClearFieldClick = (evt) => {
        setFieldText('');
    }

    return (
        <div>
            <h1>App</h1>
            <OutputBar fieldText={fieldText} onClearFieldClick={onClearFieldClick}/>
            <SuggestionArea/>
            <QuickAccessArea/>
            <HorizontalKeys onLetterClick={onLetterClick}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)