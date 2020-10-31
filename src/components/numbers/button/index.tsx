import React, { FC, useCallback } from 'react'
import { AnyAction, Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'

import { IProps, IState } from './types'

import { Button } from 'components'
import { fillBlock, IReducer } from 'reducers'

const NumberButton: FC<IProps> = ({ value }) => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  )

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const fill = useCallback(() => {
    const { selectedBlock, selectedValue } = state
    if (selectedBlock && selectedValue === 0) {
      dispatch(fillBlock(value, selectedBlock))
    }
  }, [dispatch, state, value])

  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
