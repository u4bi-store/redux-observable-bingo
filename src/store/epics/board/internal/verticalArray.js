export const verticalArray = board => board.reduce((acc, cur, rowIndex) => {

    cur.forEach((e, colIndex) => {

        !acc[colIndex] && (acc[colIndex] = [])

        acc[colIndex][rowIndex] = e

    })

    return acc

}, [])