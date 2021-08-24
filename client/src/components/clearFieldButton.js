import React from "react";
import '../styles/clearFieldButton.css';

const ClearFieldButton = ({onClearFieldClick}) => {

    return (
        <div className={"clear-field-button"}>
            <button onClick={(evt) => {onClearFieldClick(evt)}}>X</button>
        </div>
    )

}

export default ClearFieldButton;