import { IInput } from './types'

function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
