import { createGlobalStyle } from 'styled-components'
import 'styles/normalize.css'

export const GlobalStyle = createGlobalStyle`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    margin: auto;
    max-width: 600px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryText};
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
  }
`
