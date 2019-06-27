import { combineReducers } from 'redux'
import app from './app'
import board from './board'

export default combineReducers({
    app,
    board,
})