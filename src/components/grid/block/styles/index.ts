import styled, { css } from 'styled-components'

import { IProps } from './types'

export const Container = styled.div<IProps>`
  ${({ active, puzzle, theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    font-weight: ${puzzle && 'bold'};
    font-size: 20px;
    height: auto;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    transition: ${theme.transition};
    cursor: pointer;
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightblue};
    }
  `}
`
