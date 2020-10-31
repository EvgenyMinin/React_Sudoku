import React, { FC, useCallback } from 'react'
import { Action, Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

import { Button } from 'components'
import { createGrid } from 'reducers'

const NewButton: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>()

  const createNewGrid = useCallback(() => {
    if (window.confirm('Are you sure you want to start a new game?')) {
      dispatch(createGrid())
    }
  }, [dispatch])

  return <Button onClick={createNewGrid}>New Game</Button>
}

export default NewButton
