import React, { FC } from 'react'
import { NUMBERS } from 'typings'
import { numbers } from './consts'
import { Container } from './styles'
import Button from './button'

const Numbers: FC = () => (
  <Container>
    {(numbers as NUMBERS[]).map((value) => (
      <Button key={value} value={value} />
    ))}
  </Container>
)

export default Numbers
