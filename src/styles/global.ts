import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${({ theme }) => css`
    html {
      height: 100%;

      body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;

        #root {
          display: flex;
          justify-content: center;
          font-family: sans-serif;
          background: ${theme.colors.background};
          color: ${theme.colors.white};
          height: 100%;
          padding: 15px;
        }
      }
    }
  `}
`
