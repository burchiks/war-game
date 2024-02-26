import React from 'react';

const ThirdScreen = ({ playerScore, userName, computerScore, restartGame }) => {
    const resultMessage = playerScore > computerScore
        ? `${userName} win`
        : playerScore < computerScore
            ? `${userName} lose`
            : 'Draw';

    return (
        <div className={"results"}>
            <h1>{resultMessage}</h1>
            {resultMessage !== 'Draw' && <p>Score: {playerScore > computerScore ? '1' : '0'} - {playerScore < computerScore ? '1' : '0'}</p>}
            <button className="again-btn" onClick={restartGame}>Restart</button>
        </div>
    );
};

export default ThirdScreen;
