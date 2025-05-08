import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#c8aa6e',
    accent: '#ffd100',
    background: '#0a0a0a',
    text: '#ffffff',
    gold: '#ffd700',
    alliance: '#0078ff',
    horde: '#c41e3a',
  },
  fonts: {
    main: "'Cinzel', serif",
    secondary: "'Roboto', sans-serif",
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Roboto:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.secondary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.main};
    color: ${theme.colors.secondary};
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.gold};
    }
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${theme.colors.gold};
      transform: translateY(-2px);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`; 