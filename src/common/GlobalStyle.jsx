// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Montserrat from '../fonts/Montserrat.woff2';
import variables from './Variables';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto', sans-serif;
  src: url(${Montserrat}) format('woff2');
       
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: ${variables.background};
  width: 100%;
  height: 100vh;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
}
html {
  scroll-behavior: smooth;
}
`;
