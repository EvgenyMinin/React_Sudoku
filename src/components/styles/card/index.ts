import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border-radius: 15px;
    max-height: fit-content;
    padding: 15px;
  `}
`
