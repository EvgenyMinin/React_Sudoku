import React, { FC, Children, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { useHotkeys } from 'react-hotkeys-hook'

import { INDEX } from 'typings'
import { createGrid } from 'reducers'

import Block from './block'

import { Container, Row } from './styles'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])

  useEffect(() => {
    create()
  }, [create])

  const moveDown = () => {
    console.log('down')
  }

  const moveUp = () => {
    console.log('up')
  }

  const moveLeft = () => {
    console.log('left')
  }

  const moveRight = () => {
    console.log('right')
  }

  useHotkeys('down', moveDown)
  useHotkeys('up', moveUp)
  useHotkeys('left', moveLeft)
  useHotkeys('right', moveRight)

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container" key={rowIndex}>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  rowIndex={rowIndex as INDEX}
                  colIndex={colIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
