import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;

    &:first-child {
      div {
        border-top: 4px solid ${theme.colors.black};
      }
    }

    &:nth-child(3n + 3) {
      div {
        border-bottom: 3px solid ${theme.colors.black};
      }
    }

    div {
      &:nth-child(3n + 1) {
        border-left: 4px solid ${theme.colors.black};
      }

      &:last-child {
        border-right: 4px solid ${theme.colors.black};
      }
    }
  `}
`
