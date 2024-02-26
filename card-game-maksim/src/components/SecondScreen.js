import React from 'react';

const SecondScreen = ({ userName, computerCard, playerCard, nextMove, playerScore, computerScore }) => {
    return (
        <div className="game">
            <h1 className="playerName">Computer: {computerScore}</h1>
            <>
                <img className="card" src={require(`/images/${computerCard}.png`)} alt={'card'}/>
                <img className="card" src={require(`/images/${playerCard}.png`)} alt={'card'}/>
            </>
            <h1 className="playerName">{userName}: {playerScore}</h1>
            <button className="next-btn" onClick={nextMove}>Next</button>
        </div>
    );
};

export default SecondScreen;
