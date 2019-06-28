import immutable from 'immutability-helper'
import { createReducer } from 'redux-create-reducer'

import { SET_BOARD, ON_CELL_SUCCESS, ON_CELL_FAILURE } from '../constants'

const boardState = {

}

export default createReducer(boardState, {
    [SET_BOARD](state, { name, row, col, board }) {

        return immutable(state, {
            [name] : {
                $set : {
                    row,
                    col,
                    board,
                }
            }
        })

    },
    [ON_CELL_SUCCESS](state, { name, cell_id }) {

        return immutable(state, {
            [name] : {
                board : {
                    [cell_id] : {
                        check : {
                            $set : true
                        }
                    }
                }
            }
        })

    },
    [ON_CELL_FAILURE](state, { err }) {

        alert(err)

        return state
    }
})