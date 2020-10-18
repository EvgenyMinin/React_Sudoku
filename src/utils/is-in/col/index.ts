import { IInput } from './types'

function IsInCol({ grid, col, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      return true
    }
  }

  return false
}

export default IsInCol
