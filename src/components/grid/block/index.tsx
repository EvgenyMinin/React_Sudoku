import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { IReducer, selectedBlock } from 'reducers'

import { IProps, IState } from './types'

import { Container } from './styles'

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid, selectedBlock }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
      : false,
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const handleClick = () => {
    dispatch(selectedBlock([rowIndex, colIndex]))
  }

  const { value, isActive } = state

  return (
    <Container
      data-cy={`block-${rowIndex}-${colIndex}`}
      key={colIndex}
      active={isActive}
      onClick={handleClick}
    >
      {value === 0 ? '' : value}
    </Container>
  )
}

export default Block
