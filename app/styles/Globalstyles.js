import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --black: #000;
    --white: #fff;
    --dark: #000;
    --light: #a5a5a5;
    --neutral-light: #FFFCF4;
    --orange: #FF8900;
    --yellow: #FFBE00;
    --blue: #0068E1;
    --green: #00b800;
    --error: 255, 0, 0;
    --warning: 206, 164, 0;
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
    font-size: 1rem;
    color: var(--dark);
  }

  a{
    color: inherit;
  }
`;

export const Error = styled.p`
  background-color: rgba(var(--error), 0.2);
  color: rgb(var(--error));
  padding: 10px 15px;
  margin: 10px 0;
  border: none;
  border-radius: 15px;
`;

export const Warning = styled.p`
  background-color: rgba(var(--warning), 0.2);
  color: rgb(var(--warning));
  padding: 10px 15px;
  margin: 10px 0;
  border: none;
  border-radius: 15px;
`;

export const SecondaryHeading = styled.h2`
  color: var(--dark);
  font-size: 3rem;
`;

export const SubHeading = styled.p`
  color: var(--dark);
  line-height: 1.9rem;
  padding: 1rem 0;
  font-size: 1.5rem;
`;

export default GlobalStyles;
