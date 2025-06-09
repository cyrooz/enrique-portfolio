'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Playfair Display', serif;
     font-family: var(--font-inter), sans-serif;
    background-color: #F8F8F8;
    color: #111;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font-family: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyles;
