import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { IReducer, selectBlock } from 'reducers'

import { IProps, IState } from './types'

import { Container } from './styles'

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ challengeGrid, workingGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    })
  )

  const { value, isActive, isPuzzle } = state
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const handleClick = () => {
    if (!isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container
      data-cy={`block-${rowIndex}-${colIndex}`}
      key={colIndex}
      active={isActive}
      puzzle={isPuzzle}
      onClick={handleClick}
    >
      {value === 0 ? '' : value}
    </Container>
  )
}

export default Block
