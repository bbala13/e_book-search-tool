import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

:root{
    --text-dark: #595A4a; 
    --text-light:#fff;
    --background-dark:#002E63;
    --background-light:#fff;
    --gray:#323232;
    --cool-black:#002E63;
    --inverted:#ffd19c;
}


body{
    
    font-family: Arial, Helvetica, sans-serif;
    color:var(--text-dark);
    line-height: 1.5;
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box ;
}

.visually-hidden{
    border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px; 
}

li{
    list-style: none;
}
a{
    text-decoration: none;
}

h1{
    padding:1rem;
    
}
`

export const GlobalContainer = styled.div`
max-width:1200px;
margin-inline: auto;
`

export default GlobalStyle