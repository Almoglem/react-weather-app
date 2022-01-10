import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCities, addGuess, resetGame } from '../../store/actions/gameActions';
import GuessInput from '../GuessInput/GuessInput.jsx'
import GuessList from '../GuessList/GuessList';
import './GameDisplay.css'

const GameDisplay = () => {
    const dispatch = useDispatch();

    /// Component state
    const [currIdx, setCurrIdx] = useState(0)
    const [isWin, setIsWin] = useState(null)

    /// Load cities on mount
    useEffect(() => {
        dispatch(loadCities)
    }, [])

    /// Check score when all cities have been guessed
    useEffect(() => {
        if (currIdx === cities.length) checkScore();
    }, [currIdx])

    /// Getters
    const userGuesses = useSelector(state => state.gameReducer.userGuesses);
    const cities = useSelector(state => state.gameReducer.cities);

    /// Functions
    const checkScore = () => {
        const correctGuesses = userGuesses.reduce((acc, guess) => {
            if (guess.isCorrect) acc++;
            return acc;
        }, 0)
        const isWin = correctGuesses >= 3 ? true : false;
        setIsWin(isWin);
    }

    const sendGuess = (guess) => {
        dispatch(addGuess({ city: cities[currIdx], guess }));
        setCurrIdx(prev => ++prev);
    }

    const reset = () => {
        setCurrIdx(0);
        dispatch(resetGame)
        dispatch(loadCities);
    }

    return (
        <div className="game-display">
            {
                currIdx < cities.length ?
                    <div className="game-container">
                        <h1>
                            <span class="material-icons">
                                location_city
                            </span>
                            {cities[currIdx].city.name}
                        </h1>
                        <GuessInput currIdxcurrCity={cities[currIdx]} sendGuess={sendGuess} />
                    </div>
                    :
                    <div className="game-container score-display">
                        <h1> Game over</h1>
                        {isWin ?
                            <p>You won!</p>
                            : <p> You didn't win this time :( </p>}
                        <div className="button-wrapper" onClick={reset}>
                            <img src="https://www.pngkey.com/png/full/978-9783373_pink-pastelpink-pinkcloud-tumblr-cloud-aesthetic-watercolor-paint.png" alt="" />
                            <button >Try again</button>
                        </div>
                    </div>
            }
            <GuessList guesses={userGuesses} />
        </div>
    )
}

export default GameDisplay;