import React from "react";
import '../styles/outputBar.css';
import ClearFieldButton from "./clearFieldButton";

const OutputBar = ({fieldText, onClearFieldClick}) => {

    return (
        <div className={"output-bar"}>
            <input readOnly type="text" value={fieldText}/>
            <ClearFieldButton onClearFieldClick={onClearFieldClick}/>
        </div>
    )

}

export default OutputBar;