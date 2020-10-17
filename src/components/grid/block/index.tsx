import React, { FC } from 'react'

import { IProps } from './types'

import { Container } from './styles'

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`} key={colIndex}>
      0
    </Container>
  )
}

export default Block
