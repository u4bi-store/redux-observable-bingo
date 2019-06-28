import { all } from 'rambda'

export const checkBingo = board => board.map(innerArray => all(({ check }) => check, innerArray)).filter(e => e)