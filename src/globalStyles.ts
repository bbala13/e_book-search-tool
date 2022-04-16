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

p, label, li{
    color:var(--text-dark)
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
margin-bottom: 1rem;
max-width:1200px;
margin-inline: auto;
`

export default GlobalStyle