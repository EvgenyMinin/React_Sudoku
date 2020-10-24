import { INDEX, N } from 'typings'

export interface IProps {
  rowIndex: INDEX
  colIndex: INDEX
}

export interface IState {
  value: N
  isActive: boolean
}
