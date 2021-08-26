import React from "react";
import '../styles/outputBar.css';
import ClearFieldButton from "./clearFieldButton";
import ReactHtmlParser from 'react-html-parser';

const OutputBar = ({fieldText, onClearFieldClick}) => {

    return (
        <div className={"output-bar"}>
            <div className={"output-bar-field"}>
                { ReactHtmlParser(fieldText)}
            </div>
            <ClearFieldButton onClearFieldClick={onClearFieldClick}/>
        </div>
    )

}

export default OutputBar;