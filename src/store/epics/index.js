import { combineEpics } from 'redux-observable'

import { onBoard$ } from './board/onBoard'
import { onCell$ } from './board/onCell'
import { onBingo$ } from './board/onBingo'
import { onResult$ } from './board/onResult'

export default combineEpics(
    onBoard$,
    onCell$,
    onBingo$,
    onResult$
)