import { cityService } from '../../services/cityService'
import { v4 as uuidv4 } from 'uuid';


export const loadCities = async dispatch => {
    const cities = await cityService.getCities();
    dispatch({ type: 'SET_CITIES', payload: cities })
}

export const getCityWeather = id => async dispatch => {
    const res = await cityService.query(id)
    dispatch({ type: 'ADD_GUESS', payload: res });
}

export const addGuess = guess => dispatch => {
    const cityTemp = guess.city.list[0].main.temp;
    const userGuess = guess.guess;
    const isCorrect = userGuess >= cityTemp - 5 && userGuess <= cityTemp + 5
    dispatch({ type: 'ADD_GUESS', payload: { ...guess, isCorrect, id: uuidv4() } })
}


export const resetGame = dispatch => {
    dispatch({ type: 'RESET_GAME' })
}
