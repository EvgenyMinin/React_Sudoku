import { GRID, NUMBERS } from 'typings'
import {
  checkGrid,
  identifySquare,
  isInRow,
  isInCol,
  isInSquare,
  shuffle,
} from 'utils'

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function fillGrid(grid: any) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            const square = identifySquare({ grid, col, row })
            if (!isInSquare({ square, value })) grid[row][col] = value
            if (checkGrid(grid)) return true
            else {
            }
          }
        }
      }
      break
    }
  }

  grid[row][col] = 0
}

export default fillGrid
