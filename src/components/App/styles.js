import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      border: none;
      outline: none;
  }
  
  html, body {
      min-height: 100%;
      line-height: 1.5;
      font-family: 'Roboto', sans-serif;
      color: rgba(0, 0, 0, 0.87);
  }
  
  a, ul, li {
      text-decoration: none;
      padding: 0;
      list-style: none;
  }
  
  button:focus, input:focus {
      outline: none;
      cursor: pointer;
  }
  
  button, a {
      cursor: pointer;
  }
`

export default GlobalStyle
