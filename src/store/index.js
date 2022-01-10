import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { gameReducer } from './reducers/gameReducer';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const rootReducer = combineReducers({
    gameReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))