import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

.visually-hidden{
    visibility: hidden;
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
`

export default GlobalStyle