import React from 'react';
import ReactDOM from 'react-dom';
import OutputBar from "./components/outputBar";
import './styles/app.css';
import HorizontalKeys from "./components/horizontalKeys";
import SuggestionArea from "./components/suggestionArea";

const App = () => {

    return (
        <div>
            <h1>App</h1>
            <OutputBar/>
            <SuggestionArea/>
            <HorizontalKeys/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)