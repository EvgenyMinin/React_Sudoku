import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    min-height: 40px;
    background-color: ${theme.colors.black};
    border: 2px solid ${theme.colors.black};
    border-radius: 4px;
    color: ${theme.colors.white};
    margin: 4px 2px;
    padding: 0;
    opacity: 0.9;
    transition: ${theme.transition};
    cursor: pointer;

    &:focus {
      border-color: ${theme.colors.blue};
      outline: 0;
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`
