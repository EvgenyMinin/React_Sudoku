import React, { FC, Children } from 'react'

import { createFullGrid } from 'utils'

import Block from './block'

import { Container, Row } from './styles'

const Grid: FC = () => {
  const grid = createFullGrid()
  console.log('grid', grid)
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container" key={rowIndex}>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block rowIndex={rowIndex} colIndex={colIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
