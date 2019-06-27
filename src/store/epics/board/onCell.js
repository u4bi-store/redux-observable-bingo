import { ON_CELL } from '../../constants'
import { onCellSuccess, setTurn, onCellFailure, onBingo } from '../../actions'

import { ofType } from 'redux-observable'

import { concat, of } from 'rxjs'

import { tap, flatMap } from 'rxjs/operators'

export const onCell$ = (action$, store$) => 
    action$.pipe(
        ofType(ON_CELL),
        tap(e => console.log(e)),
        flatMap(({ name, cell_id }) => {

            const player_id = store$.value.app.players[name].id
            const { turn_id } = store$.value.app

            const len = Object.keys(store$.value.app.players).length - 1
            const next_trun_id = len > turn_id ? turn_id + 1 : 0

            return concat(
                ...(
                    player_id === turn_id ?
                    [
                        of(onCellSuccess(name, cell_id)),
                        of(onBingo(name)),
                        of(setTurn(next_trun_id)),
                    ]
                    :
                    [
                        of(onCellFailure(`${ name }님의 차례가 아닙니다.`))
                    ]
                )
            )
        })
    )
