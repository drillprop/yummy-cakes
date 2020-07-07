import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
  ${normalize};
  * {
    text-decoration: none;
    /* cursor: none; */
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    color: ${props => props.theme.text};
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }


`
export default GlobalStyle
