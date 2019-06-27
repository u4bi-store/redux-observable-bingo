import * as type from '../constants'

export const onGame = (text) => ({
    type: type.ON_GAME,
    text
})

export const onResult = () => ({
    type: type.ON_RESULT
})

export const addPlayer = (name) => ({
    type: type.ADD_PLAYER,
    name
})

export const setTurn = (id) => ({
    type: type.SET_TURN,
    id
})

export const setBingo = (name, bingo) => ({
    type: type.SET_BINGO,
    name,
    bingo
})

export const clearBingo = (name) => ({
    type: type.CLEAR_BINGO,
    name
})