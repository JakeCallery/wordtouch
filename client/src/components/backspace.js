import React from "react";
import '../styles/backspace.css';

const Backspace = ({onBackspaceClick}) => {

    return (
      <div className={"backspace-button"}>
          <button onClick={(evt) => {onBackspaceClick(evt)}}>&lt;</button>
      </div>
    );
}

export default Backspace;