import * as type from '../constants'

export const onBoard = (name, col, row) => ({
    type: type.ON_BOARD,
    name,
    col,
    row
})

export const setBoard = (name, board) => ({ 
    type: type.SET_BOARD,
    name,
    board
})

export const onCell = (name, cell_id) => ({
    type: type.ON_CELL,
    name,
    cell_id
})

export const onCellSuccess = (name, cell_id) => ({
    type: type.ON_CELL_SUCCESS,
    name,
    cell_id
})

export const onCellFailure = (err) => ({
    type: type.ON_CELL_FAILURE,
    err
})

export const onBingo = (name) => ({
    type: type.ON_BINGO,
    name
})