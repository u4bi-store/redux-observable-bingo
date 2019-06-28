import { range } from 'rambda'

export const to2DArray = (array1D, row, col) => {

    let tick = 0

    return range(0, row).reduce((acc, cur) => {
        acc[cur] = range(0, col)
                    .reduce((acc, cur) => {

                        acc[cur] = array1D[tick++]

                        return acc
                    }, [])

        return acc

    }, [])

}