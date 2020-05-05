import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'normalize.css';
import './font.css';

const theme = {
    colors: {
        font: '#000000',
        background: '#FFFFFF',
        primary: '#F07178',
        primaryDarker: '#C35C61',
        secondary: '#3F3D56',
        muted: '#0000007F',
        accent: '#F2F2F2',
    },
    font: {
        family: {
            main: "'Poppins', sans-serif",
        },
        size: {
            base: '16px',
            xs: '.7rem',
            s: '.8rem',
            m: '1rem',
            l: '1.4rem',
            xl: '2.2rem',
            xxl: '3rem',
            xxxl: '4rem',
        },
    },
    mediaQuery: {
        tablet: `min-width: 768px`,
        desktop: `min-width: 1024px`,
        large: `min-width: 1440px`,
    },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font.family.main};
    font-size: ${(props) => props.theme.font.size.base};
    color: ${(props) => props.theme.colors.font};
    background-color: ${(props) => props.theme.colors.background};
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  .svg-inline--fa {
    color: ${(props) => props.theme.colors.font};
    height: 2rem;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
  
  p {
    line-height: 1.5;
  }
`;

const App = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

App.propTypes = {
    children: PropTypes.node.isRequired,
};

export default App;
