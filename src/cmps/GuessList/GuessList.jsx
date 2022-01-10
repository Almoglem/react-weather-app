import React from 'react'
import Guess from '../Guess/Guess.jsx'
import './GuessList.css'


const GuessList = (props) => {
    const { guesses } = props;
    return (
        <div className="guess-list">
            {guesses.map(guess => {
                return <Guess guess={guess} key={guess.id} />
            })}

        </div>
    )

}

export default GuessList;