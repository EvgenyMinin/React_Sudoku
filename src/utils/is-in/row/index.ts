import { IInput } from './types'

function IsInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value)
}

export default IsInRow
