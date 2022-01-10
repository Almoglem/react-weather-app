const INITIAL_STATE = {
    userGuesses: [],
    cities: []
}

export function gameReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_CITIES':
            return {
                ...state,
                cities: action.payload
            }

        case 'ADD_GUESS':
            return {
                ...state,
                userGuesses: [...state.userGuesses, action.payload]
            }
        case 'RESET_GAME':
            return {
                ...state,
                cities: [],
                userGuesses: []
            }
        default: return state
    }


}