import React, { FC, Children, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { INDEX, NUMBERS } from 'typings'
import { createGrid, fillBlock, IReducer, selectBlock } from 'reducers'

import { IState } from './types'
import Block from './block'

import { Container, Row } from './styles'

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, solvedGrid, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
      solvedGrid,
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])

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

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0) {
        dispatch(fillBlock(n, state.selectedBlock))
      }
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  )

  const pressOne = useCallback(() => {
    fill(1)
  }, [fill])

  const pressTwo = useCallback(() => {
    fill(2)
  }, [fill])

  const pressThree = useCallback(() => {
    fill(3)
  }, [fill])

  const pressFour = useCallback(() => {
    fill(4)
  }, [fill])

  const pressFive = useCallback(() => {
    fill(5)
  }, [fill])

  const pressSix = useCallback(() => {
    fill(6)
  }, [fill])

  const pressSeven = useCallback(() => {
    fill(7)
  }, [fill])

  const pressEight = useCallback(() => {
    fill(8)
  }, [fill])

  const pressNine = useCallback(() => {
    fill(9)
  }, [fill])

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
        case 49:
        case 97:
          pressOne()
          break
        case 50:
        case 98:
          pressTwo()
          break
        case 51:
        case 99:
          pressThree()
          break
        case 52:
        case 100:
          pressFour()
          break
        case 53:
        case 101:
          pressFive()
          break
        case 54:
        case 102:
          pressSix()
          break
        case 55:
        case 103:
          pressSeven()
          break
        case 56:
        case 104:
          pressEight()
          break
        case 57:
        case 105:
          pressNine()
          break
        default:
          break
      }
    }

    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    pressEight,
    pressFive,
    pressFour,
    pressNine,
    pressOne,
    pressSeven,
    pressSix,
    pressThree,
    pressTwo,
    state,
  ])

  useEffect(() => {
    if (!state.solvedGrid) create()
  }, [create, state.solvedGrid])

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
