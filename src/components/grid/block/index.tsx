import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { IReducer } from 'reducers'

import { IProps, IState } from './types'

import { Container } from './styles'

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))

  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`} key={colIndex}>
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
