import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    --font-family-primary: 'Comic Neue';
    --font-family-secundary: Roboto;
    --font-color-white: #FFFFFF;
    --font-color-black: #000000;
    --font-color-guia: #76F7FF;
    
    --header-background-color: #98C1FF;

    --red-div: rgba(103, 40, 40, 0.78); 
    --blue-div: rgba(17, 23, 80, 0.65);
    --red-button: #E23E3E;
    --blue-button: #2534B9;
    --red-button-shadow: #868b8e;
    --back-color: #231f20;

      box-sizing: border-box;
      outline: none;
      list-style: none;
      text-decoration: none;
      padding: 0;
      margin: 0;
      
  }
  
  body {
    margin: 0;
    padding: 0;
    border: none;
    
  }

  a {
    color: #000;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
