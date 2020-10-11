import React, { FC, Children } from 'react'

const Grid: FC = () => {
  return (
    <div data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <div data-cy="grid-row-container" key={rowIndex}>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <div data-cy="block" key={colIndex}>
                  {colIndex}
                </div>
              ))
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Grid
