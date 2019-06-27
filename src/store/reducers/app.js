import immutable from 'immutability-helper'
import { createReducer } from 'redux-create-reducer'

import { ON_GAME, ADD_PLAYER, SET_TURN, SET_BINGO, CLEAR_BINGO } from '../constants'

const appState = {
    tick : 0,
    players : {},
    turn_id : 0
}

export default createReducer(appState, {
    [ON_GAME](state, { text }) {

        text && alert(text)

        return immutable(state, {
            tick : {
                $set : state.tick + 1
            }
        })
    },
    [ADD_PLAYER](state, { name }) {

        return immutable(state, {
            players : {
                $merge : {
                    [name] : {
                        id : Object.keys(state.players).length,
                        bingo : 0
                    }
                }
            }
        })

    },
    [SET_TURN](state, { id }) {

        return immutable(state, {
            turn_id : {
                $set : id
            }
        })

    },
    [SET_BINGO](state, { name, bingo }) {

        return immutable(state, {
            players : {
                [name] : {
                    bingo : {
                        $set : bingo
                    }
                }
            }
        })

    },
    [CLEAR_BINGO](state, { name }) {

        return immutable(state, {
            players : {
                [name] : {
                    bingo : {
                        $set :0
                    }
                }
            },
            turn_id : {
                $set : 0
            }
        })

    }
})