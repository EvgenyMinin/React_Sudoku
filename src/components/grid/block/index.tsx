import React, { FC } from 'react'

interface IProps {
  rowIndex: number
  colIndex: number
}

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  return (
    <div data-cy="block" key={colIndex}>
      |{rowIndex}
      {colIndex}|
    </div>
  )
}

export default Block
