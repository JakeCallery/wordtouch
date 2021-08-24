import React from 'react';
import ReactDOM from 'react-dom';
import WordButton from "./components/wordButton";

const App = () => {

    return (
        <div>
            <h1>App</h1>
            <WordButton word={"test"}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)