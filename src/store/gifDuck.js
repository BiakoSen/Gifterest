// gifDuck.js
// Initial Duck State

import { http } from '../utils/constans'
import { request } from '../utils/request'

export const INITIAL_STATE = {
    gif: {},
    gifOri: [],
    gifSelectedId: '',
    gifSearch: ''
}

// Actions
export const ActionTypes = {
    CLEAN_STATE: 'CLEAN_STATE',
    GET_GIF: 'GET_GIF',
    GET_GIF_ORI: 'GET_GIF_ORI',
    SET_NAME: 'SET_NAME',
    REMOVE_GIF: 'REMOVE_GIF',
}

// nuestro reducer
export default function gifReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case ActionTypes.GET_GIF:
            return {
                ...state,
                gif: action.payload,
            }
        case ActionTypes.SET_NAME:
            return {
                ...state,
                gifSearch: action.payload
            }
        case ActionTypes.GET_GIF_ORI:
            return {
                ...state,
                gifOri: action.payload
            }
        case ActionTypes.REMOVE_GIF:
            return {
                ...state,
                gif: INITIAL_STATE.gif,
            }
        case ActionTypes.CLEAN_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}

// Actions Functions -> Side Effect Function of Redux and Action Creator Functions of Redux
export const getGif = (id) => async (dispatch, getState) => {
    try {

        const { data } = await http.get(request(id, '').getGif)

        console.log('data: ', data.data)

        dispatch({
            type: ActionTypes.GET_GIF,
            payload: data.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const getGifOri = () => async (dispatch, getState) => {
    try {
        const { gifSearch } = getState().gifs
        const { data } = await http.get(request('', gifSearch != '' ? gifSearch : 'advenure time').searchGifs)

        dispatch({
            type: ActionTypes.GET_GIF_ORI,
            payload: data.data.map(data => ({
                images: data.images,
                id: data.id
            })
            )
        })

    } catch (error) {
        console.log(error)
    }
}

export const setSearchGif = (name) => (dispatch, getState) => {
    dispatch({
        type: ActionTypes.SET_NAME,
        payload: name
    })
}

export const cleanState = () => (dispatch) => { dispatch({ type: ActionTypes.CLEAN_STATE }) }
