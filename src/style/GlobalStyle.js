import { createGlobalStyle } from "styled-components";
/* import "./fonts.css"; */

export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: 'Ubuntu', sans-serif;

   }

   body{
        background: ${({ theme }) => theme.colors.backgroundColor};
   }
`;
