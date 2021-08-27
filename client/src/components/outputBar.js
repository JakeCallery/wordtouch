import React from "react";
import '../styles/outputBar.css';
import ClearFieldButton from "./clearFieldButton";
import ReactHtmlParser from 'react-html-parser';
import Backspace from "./backspace";

const OutputBar = ({fieldText, onBackspaceClick}) => {
    fieldText = fieldText + "<span>|</span>";
    return (
        <div className={"output-bar"}>
            <div className={"output-bar-field"}>
                { ReactHtmlParser(fieldText) }
            </div>
            <Backspace onBackspaceClick={onBackspaceClick}/>
        </div>
    )

}

export default OutputBar;