import React from 'react'
import './Guess.css'

const Guess = (props) => {
    const { guess } = props;
    return (
        <div className={`guess ${guess.isCorrect ? 'right' : 'wrong'}`}>
            <h3>{guess.city.city.name}</h3>
            <p>Guessed {guess.guess}°</p>
            <p>Was {guess.city.list[0].main.temp}°</p>
        </div>
    )
}

export default Guess;