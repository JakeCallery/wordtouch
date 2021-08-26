import React from "react";
import '../styles/suggestionArea.css'
import {useState, useEffect} from "react";
import axios from "axios";
import SuggestedWord from "./suggestedWord";

const SuggestionArea = ({predictionary, input}) => {

    const BASE_DICT = 'BASE_DICT';

    const [isLoading, setIsLoading] = useState(true);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        axios
            .get("wordsSmall.txt")
            .then(response => {
                console.log('Words loaded');
                predictionary.addDictionary(BASE_DICT)
                predictionary.useDictionary(BASE_DICT);
                predictionary.parseWords(response.data, {
                    elementSeparator: '\n',
                    rankSeparator: ' ',
                    wordPosition: 2,
                    rankPosition: 0,
                    addToDictionary: BASE_DICT,
                });

                setIsLoading(false);
            })
    },[predictionary]);

    useEffect(() => {
        let predictions = predictionary.predictCompleteWord(input);
        console.log(predictions);
        setSuggestions(predictions);
    }, [input, predictionary]);

    
    return (
        <div className={'suggestion-area'}>
            {isLoading && <h1>Loading...</h1>}
            {suggestions.map((word) => {
                return(
                    <SuggestedWord word={word}/>
                )
            }) }
        </div>
    )

}

export default SuggestionArea;