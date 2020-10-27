import React, { FC } from 'react'
import { IProps } from './types'

import { Button } from 'components'

const NumberButton: FC<IProps> = ({ value }) => {
  const fill = () => {
    console.log('fill', value)
  }

  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
