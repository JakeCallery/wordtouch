import {createRef} from "react";
import '../styles/audioElement.css';

const SpeechElement = ({wordToSpeak}) => {

    const audioElement = createRef();

    if(wordToSpeak !== "") {
        //TODO: Make call to server to synth word
        console.log("Speaking " + wordToSpeak);
    }

    return (
        <div className={"audio-element"}>
            <audio ref={audioElement}/>
        </div>
    )

}

export default SpeechElement;