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