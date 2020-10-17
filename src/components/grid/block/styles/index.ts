import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    font-weight: bold;
    font-size: 20px;
    height: auto;
    background-color: ${theme.colors.white};
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
