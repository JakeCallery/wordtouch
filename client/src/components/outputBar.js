import React from "react";
import '../styles/outputBar.css';

const OutputBar = ({fieldText}) => {

    return (
        <div className={"output-bar"}>
            <input readOnly type="text" value={fieldText}/>
        </div>
    )

}

export default OutputBar;