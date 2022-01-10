import React from 'react'
import GameDisplay from '../../cmps/GameDisplay/GameDisplay.jsx'

const Main = () => {
    return (
        <div className="main-page">
            <h1 className="main-title"> Welcome to the guessing game! </h1>
            <GameDisplay />
        </div >
    )

}

export default Main;