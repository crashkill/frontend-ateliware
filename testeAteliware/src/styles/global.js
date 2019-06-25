import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body {
    background-color:  #00BFFF;
    text-rendering: optimizedLegibility !important;
    -webkit-font-smoothing: antialiazed !important;
    font-family: sans-serif;
  }
`;
export default GlobalStyle;
