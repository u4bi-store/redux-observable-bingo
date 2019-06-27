import { ON_BINGO } from '../../constants'
import { setBingo, onResult } from '../../actions'
import { heightArray, diagonalArray } from '../../../providers/array'

import { ofType } from 'redux-observable'

import * as R from 'rambda'

import { concat, of } from 'rxjs'

import { map, tap, flatMap } from 'rxjs/operators'

export const onBingo$ = (action$, store$) => 
    action$.pipe(
        ofType(ON_BINGO),
        tap(e => console.log(e)),
        map(({ name }) => {

            let tick = 0;

            return {
                name,
                board : R.range(0, 5).reduce((acc, cur) => {
                            acc[cur] = R.range(0, 5)
                                        .reduce((acc, cur) => {

                                            acc[cur] = store$.value.board[name][tick++]

                                            return acc
                                        }, [])

                            return acc

                        }, [])
            }

        }),
        map(({ name, board }) => {

            const check = board =>
                 board.map(innerArray => 
                    R.all(({ check }) => check, innerArray)).filter(e => e)

            return {
                name,
                bingo : check(board).length + 
                        check(heightArray(board)).length + 
                        check(diagonalArray(board)).length
            }
        }),
        flatMap(({ name, bingo }) => {

            const player = name => store$.value.app.players[name]
            const _last = Object.keys(store$.value.app.players).length - 1

            return concat(
                ...[
                    of(setBingo(name, bingo)),
                    _last === player(name).id && of(onResult())
                ].filter(e => e)
            )

        })
    )
