import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    --font-family-primary: Comic Neue;
    --font-family-secundary: Roboto;
    --font-color-white: #FFFFFF;
    --font-color-black: #000000;
    
    --header-background-color: #98C1FF;

    --red-div: rgba(103, 40, 40, 0.78); 
    --blue-div: rgba(17, 23, 80, 0.65);
    --red-button: #E23E3E;
    --blue-button: #2534B9;

      box-sizing: border-box;
      outline: none;
  }
  
  body {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
  }
`;

export default GlobalStyle;
