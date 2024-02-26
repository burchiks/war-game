import React, { Component } from 'react';
import StartScreen from './components/StartScreen';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';
import { generateDeck } from "./constants/cards";
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:"",
            screen: 1,
            playerScore: 0,
            computerScore: 0,
            round: 0,
            playerCards: [],
            computerCards: [],

        };
    }

    startGame = () => {

        const deck = generateDeck();
        deck.sort(() => Math.random() - 0.5);
        const playerCards = deck.slice(0, deck.length / 2);
        const computerCards = deck.slice(deck.length / 2);
        const userName = document.getElementById('userNameInput').value;
        this.setState({
            screen: 2,
            playerCards,
            computerCards,
            userName: userName,

        });
    }
    restartGame = () => {
        this.setState({
            userName: "",
            screen: 1,
            playerScore: 0,
            computerScore: 0,
            round: 0,
            playerCards: [],
            computerCards: [],
        });
    }

    nextMove = () => {
        const { playerCards, computerCards, round, playerScore, computerScore } = this.state;
        const playerCard = playerCards[round];
        const computerCard = computerCards[round];
        this.setState({
            playerScore: playerCard > computerCard ? playerScore + 1 : playerScore,
            computerScore: playerCard < computerCard ? computerScore + 1 : computerScore,
            round: round + 1,
        });
        if (round + 1 === playerCards.length) {
            this.setState({
                screen: 3,
                winner: playerScore > computerScore ? 'player' : playerScore < computerScore ? 'computer' : 'draw',
            });
        }
    }

    render() {
        const { screen, playerScore, computerScore, round, playerCards, computerCards } = this.state;
        return (
            <div className="wrapper">

                {screen === 1 && <StartScreen startGame={this.startGame} userName={this.state.userName} />}


                {screen === 2 && (
                    <SecondScreen
                        userName={this.state.userName}
                        computerCard={computerCards[round]}
                        playerCard={playerCards[round]}
                        nextMove={this.nextMove}
                        playerScore={playerScore}
                        computerScore={computerScore}


                    />
                )}

                {screen === 3 && (
                    <ThirdScreen playerScore={playerScore} computerScore={computerScore}  userName={this.state.userName}  restartGame={this.restartGame}/>
                )}
            </div>
        );
    }
}

export default App;
