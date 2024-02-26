import React from 'react';

const StartScreen = ({ startGame,userName }) => {

    return (
        <div className="login-page">
            <h1 className="title">Ready for war?</h1>
            <input className={"name-input"} type="text" placeholder="Enter your name" id="userNameInput"/>

            <button className="start-btn" onClick={startGame}>Start</button>
        </div>
    );
};

export default StartScreen;