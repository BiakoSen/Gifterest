// store/index.js
import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
// imports of my reducers
import gifReducer from './gifDuck'

// It will combine each one of my actions controllers aka reducers
const rootReducer = combineReducers({
    gifs: gifReducer,
})

// For debugging purposes with debux toolbox
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore() {
    // 3 pieces: reducer, initialState, middlewares
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}
