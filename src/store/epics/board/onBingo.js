import { ON_BINGO } from '../../constants'
import { setBingo, onResult } from '../../actions'
import { to2DArray, checkBingo, verticalArray, diagonalArray } from './internal'

import { ofType } from 'redux-observable'

import { concat, of } from 'rxjs'

import { map, tap, flatMap } from 'rxjs/operators'

export const onBingo$ = (action$, store$) => 
    action$.pipe(
        ofType(ON_BINGO),
        tap(e => console.log(e)),
        map(({ name }) => ({
            name,
            board : to2DArray(
                        store$.value.board[name].board,
                        store$.value.board[name].row,
                        store$.value.board[name].col
                    )
        })),
        map(({ name, board }) => ({
            name,
            bingo : checkBingo(board).length + 
                    checkBingo(verticalArray(board)).length + 
                    checkBingo(diagonalArray(board)).length
        })),
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
