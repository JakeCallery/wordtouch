import {createRef, useEffect, useState} from "react";
import '../styles/audioElement.css';

const SpeechElement = ({wordToSpeak}) => {

    const audioElement = createRef();

    useEffect(() => {
        if(wordToSpeak !== "") {
            //TODO: Make call to server to synth word
            console.log("Speaking " + wordToSpeak);
        }
    },[wordToSpeak])



    return (
        <div className={"audio-element"}>
            <audio ref={audioElement}/>
        </div>
    )

}

export default SpeechElement;