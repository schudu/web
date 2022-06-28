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
    font-size: 1.2rem;
  }

  a{
    color: inherit;
  }
`;

export const Button = styled.button`
  background-color: var(--orange);
  padding: 0.7rem 2rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: brightness(97%);
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
