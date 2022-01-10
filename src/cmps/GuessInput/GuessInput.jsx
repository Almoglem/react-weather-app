import React, { useRef } from 'react'
import './GuessInput.css'


const GuessInput = (props) => {
    const { sendGuess } = props;
    const guessInput = useRef()

    const emitGuess = () => {
        const guess = guessInput.current.value;
        sendGuess(guess);
        guessInput.current.value = ''
    }

    return (
        <div className="guess-input-wrapper">
            <div>
                <p className="guess-label"> Guess the city's temperature in celcius </p>
                <div>
                    <input ref={guessInput} type="number" placeholder="Your guess here..." className="guess-input" />
                </div>
            </div>
            <div className="button-wrapper" onClick={emitGuess}>
                <img src="https://www.pngkey.com/png/full/978-9783373_pink-pastelpink-pinkcloud-tumblr-cloud-aesthetic-watercolor-paint.png" alt="" />
                <button >Send Guess</button>
            </div>
        </div>
    )

}

export default GuessInput;
