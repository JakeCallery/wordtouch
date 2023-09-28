import {createRef, useEffect, useState} from "react";
import '../styles/audioElement.css';

const SpeechElement = ({wordToSpeak}) => {

    const audioElement = createRef();

    useEffect(() => {
        if(wordToSpeak !== "") {
            //TODO: Make call to server to synth word
            console.log("Speaking " + wordToSpeak);
            speakWord(wordToSpeak);
        }
    },[wordToSpeak])


    //http://192.168.2.60:5500/api/tts?voice=larynx%3Acmu_jmk-glow_tts&
    // vocoder=hifi_gan:vctk_small&
    // denoiserStrength=0.001&
    // text=freedom&
    // cache=true
    const speakWord = async (word) => {
        console.log('Fetching...');
        const res = await fetch(
            'http://192.168.2.60:5500' +
            '/api/tts?voice=' + encodeURIComponent('larynx:cmu_jmk-glow_tts') +
            '&vocoder=' + encodeURIComponent('hifi_gan:vctk_small') +
            '&denoiserStrength=' + '0.001' +
            '&text=' + encodeURIComponent(word),
            {cache: 'no-cache'}

        );

        console.log(res);

        if(res.ok) {
            const blob = await res.blob();
            console.log('Speaking...');
            console.log(audioElement.current);
            audioElement.current.src = URL.createObjectURL(blob);
            audioElement.current.play();
        }
    };

    return (
        <div className={"audio-element"}>
            <audio ref={audioElement}/>
        </div>
    )

}

export default SpeechElement;