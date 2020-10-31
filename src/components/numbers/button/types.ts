import { BLOCK_COORDS, N, NUMBERS } from 'typings'

export interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
}
export interface IProps {
  value: NUMBERS
}
