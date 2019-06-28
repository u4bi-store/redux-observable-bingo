import * as type from '../constants'

export const onBoard = (name, row, col) => ({
    type: type.ON_BOARD,
    name,
    row,
    col
})

export const setBoard = (name, row, col, board) => ({ 
    type: type.SET_BOARD,
    name,
    row,
    col,
    board,
})

export const onCell = (name, cell_num) => ({
    type: type.ON_CELL,
    name,
    cell_num
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