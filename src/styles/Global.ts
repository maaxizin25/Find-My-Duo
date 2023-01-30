import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,ol{
    list-style: none;
  }
  
  html, body, #root, .App {
  height: 100%; 
  }

  button{
    cursor: pointer;
  }

  body{
    font-family: 'Inter';
  }

:-webkit-autofill,
:-webkit-autofill:hover, 
:-webkit-autofill:focus {
  border: 0px solid green;
  -webkit-text-fill-color: #A9AAB2;
  -webkit-box-shadow: 0 0 0px 1000px #21232B inset;
  transition: background-color 5000s ease-in-out 0s;
}

[data-reach-dialog-overlay] [data-reach-dialog-inner]{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
[data-reach-dialog-overlay]{
  display: flex;
  justify-content: center;
  z-index: 4;
}

  :root{
    --gray6: #1A1B1F;
    --gray5: #21232B;
    --gray4: #373943;
    --gray3: #50515E;
    --gray2: #6B6C7A;
    --gray1: #A9AAB2;

    --fixed-white: #FFFFFF;

    --color-primary: #0D81EC;

    --color-red: #cc2222;

    --font1: 2.625rem;    //42px
    --font2: 1.5rem;     //24px
    --font3: 2rem;       //32px
    --font4: 1.125rem;   //18px
    --font5: 1rem;       //16px
    --font6: .75rem;     //12px

    --radius1: .5rem;    //8px
    --radius2: 1rem;    //16px
  }

  body {
    background-color: var(--gray6);
    margin-top: 5rem;
  }
`;
