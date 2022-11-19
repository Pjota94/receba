import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    
  }
  button{
    cursor: pointer;
  }
  
  ul ol li{
    list-style: none;
  }
  
  :root{
    --pink-primary: 255, 87, 127, 1:
  }`;
