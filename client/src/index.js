import React from 'react';
import ReactDOM from 'react-dom';
import WordButton from "./components/wordButton";
import OutputBar from "./components/outputBar";
import './styles/app.css';
import HorizontalKeys from "./components/horizontalKeys";

const App = () => {

    return (
        <div>
            <h1>App</h1>
            <OutputBar/>
            <WordButton word={"TEST"}/>
            <HorizontalKeys/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)