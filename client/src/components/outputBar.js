import React, {useEffect, useRef} from "react";
import '../styles/outputBar.css';
import ReactHtmlParser from 'react-html-parser';
import Backspace from "./backspace";

const OutputBar = ({fieldText, onBackspaceClick}) => {
    const barRef = useRef();

    useEffect(() => {
        barRef.current.scrollLeft = barRef.current.scrollWidth;
    });

    fieldText = fieldText + "<span id='cursor'>|</span>";
    return (
        <div className={"output-bar"}>
            <div ref={barRef} className={"output-bar-field"}>
                { ReactHtmlParser(fieldText) }
            </div>
            <Backspace onBackspaceClick={onBackspaceClick}/>
        </div>
    )

}

export default OutputBar;