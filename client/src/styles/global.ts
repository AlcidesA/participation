import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
      --text-base-size: 1em;
      --text-scale-ratio: 1.250;

      --text-sm: calc(var(--text-base-size) / var(--text-scale-ratio));
      --text-base: var(--text-base-size);
      --text-md: calc(var(--text-base-size) * var(--text-scale-ratio));
      --text-lg: calc(var(--text-base-size) * var(--text-scale-ratio) * var(--text-scale-ratio));

      @media (max-width: 480px) {
        --text-scale-ratio: 1.1;
        --text-base: 0.875rem;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #fff;
      color: #555;
      font-size: var(--text-base-size);
      font-family: 'Work Sans', sans-serif;

      @media (min-width: 480px) {
          padding-bottom: 5rem;
      }
    }
`;

export default GlobalStyle;
