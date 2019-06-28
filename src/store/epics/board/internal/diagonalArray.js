export const diagonalArray = board => board.reduce((acc, cur) => {

    cur.forEach((e, colIndex) => {

        colIndex === 0 && acc.data[0].push(board[acc.left][acc.left])
        acc.right === colIndex && acc.data[1].push(e)

    })

    acc.left++;
    acc.right--;

    return acc

}, {
    data : [[],[]],
    left : 0,
    right : board.length - 1
})
.data