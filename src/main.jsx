import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
      --font-family: 'Arial';
  }

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body {
      height: 100vh;
      background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
      font-family: var(--font-family);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  li {
      list-style: none;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
