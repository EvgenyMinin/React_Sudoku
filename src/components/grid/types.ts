import { BLOCK_COORDS, GRID, N } from 'typings'

export interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
  solvedGrid?: GRID
}
