import { ON_BOARD } from '../../constants'
import { setBoard, clearBingo } from '../../actions'

import { ofType } from 'redux-observable'

import * as R from 'rambda'

import { concat, of } from 'rxjs'

import { map, tap, flatMap } from 'rxjs/operators'

export const onBoard$ = action$ => 
    action$.pipe(
        ofType(ON_BOARD),
        tap(e => console.log(e)),
        map(({ name, row, col }) => ({
            name,
            row, 
            col,
            board : R.pipe(
                R.map(e => ({ num : e, check : false })),
                R.sort(_ => 0.5 - Math.random())
            )
            (R.range(1, row * col + 1 ))
        })),
        flatMap(({ name, row, col, board }) => 
            concat(
                of(clearBingo(name)),
                of(setBoard(name, row, col, board))
            )
        )
    )
