import { ON_RESULT } from '../../constants'
import { onGame } from '../../actions'

import { ofType } from 'redux-observable'

import { map, tap } from 'rxjs/operators'


export const onResult$ = (action$, store$) => 
    action$.pipe(
        ofType(ON_RESULT),
        tap(e => console.log(e)),
        map(() => {

            const result = Object.keys(store$.value.app.players).reduce((acc, playerName) => {

                store$.value.app.players[playerName].bingo > 4 && acc.push(playerName)
                return acc;

            }, [])

            return result.length 
                ? 
                onGame(`${ result } ${ result.length > 1 ? '님과 무승부입니다.' : '님이 빙고를 완성했습니다.' }`) 
                : { type: null }

        })
    )