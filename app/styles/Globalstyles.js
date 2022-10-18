import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --black: #000;
    --white: #fff;
    --light: #a5a5a5;
    --neutral-light: #FFFCF4;
    --orange: #FF8900;
    --yellow: #FFBE00;
    --blue: #0068E1;
    --green: #00b800;
  }

  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: var(--neutral-light);
    color: var(--black);
    font-size: 1rem;
  }

  a{
    color: inherit;
  }
`;

export const SecondaryHeading = styled.h2`
  color: var(--black);
  font-size: 3rem;
`;

export const SubHeading = styled.p`
  color: var(--black);
  line-height: 1.9rem;
  padding: 1rem 0;
  font-size: 1.5rem;
`;

export default GlobalStyles;
