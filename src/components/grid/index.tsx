import React, { FC, Children, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { INDEX } from 'typings'
import { createGrid, IReducer, selectBlock } from 'reducers'

import { IState } from './types'
import Block from './block'

import { Container, Row } from './styles'

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock,
  }))
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])

  useEffect(() => {
    create()
  }, [create])

  const moveUp = useCallback(() => {
    if (state.selectedBlock && state.selectedBlock[0] > 0) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      )
    }
  }, [state, dispatch])

  const moveDown = useCallback(() => {
    if (state.selectedBlock && state.selectedBlock[0] < 8) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      )
    }
  }, [state, dispatch])

  const moveLeft = useCallback(() => {
    if (state.selectedBlock && state.selectedBlock[1] > 0) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      )
    }
  }, [state, dispatch])

  const moveRight = useCallback(() => {
    if (state.selectedBlock && state.selectedBlock[1] < 8) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      )
    }
  }, [dispatch, state])

  useEffect(() => {
    const handleKeyUp = (e: any) => {
      switch (e.keyCode) {
        case 38:
          moveUp()
          break
        case 40:
          moveDown()
          break
        case 37:
          moveLeft()
          break
        case 39:
          moveRight()
          break
        default:
          break
      }
    }

    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [moveDown, moveLeft, moveRight, moveUp, state])

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
