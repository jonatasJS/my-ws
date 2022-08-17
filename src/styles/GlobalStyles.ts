import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap");

  :root {
    --color-white-100: hsl(206, 5%, 98%);
    --color-white-200: hsl(206, 5%, 90%);
    --color-white-300: hsl(206, 5%, 80%);
    --color-white-400: hsl(206, 5%, 65%);
    --color-white-500: hsl(206, 5%, 50%);
    --color-white-600: hsl(206, 5%, 35%);
    --color-black-100: hsl(213, 20%, 9%);
    --color-black-200: hsl(213, 23%, 8%);
    --color-black-300: hsl(214, 21%, 6%);
    --color-black-400: hsl(210, 21%, 6%);
    --color-black-500: hsl(216, 22%, 4%);
    --color-black-600: hsl(220, 18%, 3%);
    --color-black-700: hsl(220, 27%, 2%);
    --color-black-800: hsl(180, 20%, 1%);
    --color-blue-100: hsl(214, 95%, 93%);
    --color-blue-200: hsl(213, 97%, 87%);
    --color-blue-300: hsl(212, 96%, 78%);
    --color-blue-400: hsl(213, 94%, 68%);
    --color-blue-500: hsl(217, 91%, 60%);
    --color-blue-600: hsl(221, 83%, 53%);
    --color-blue-700: hsl(224, 76%, 48%);
    --color-blue-800: hsl(226, 71%, 40%);
    --color-blue-900: hsl(224, 64%, 33%);
    --shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html,
  body,
  #__next {
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    scroll-behavior: smooth;
    color: var(--color-white-100);
    background-color: var(--color-black-500);
  }
`
