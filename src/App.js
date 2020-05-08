import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.font.family.main};
    font-size: ${theme.font.size.base};
    color: ${theme.colors.font};
    background-color: ${theme.colors.background};
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  .svg-inline--fa {
    color: ${theme.colors.font};
    height: 2rem;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
  
  p {
    line-height: 1.8;
  }
  
  .grecaptcha-badge {
    display: none !important;
  }
`;

const App = ({ children }) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.GATSBY_GOOGLE_CAPTCHA_PUBLIC_KEY}>
            <GlobalStyle />
            {children}
        </GoogleReCaptchaProvider>
    );
};

App.propTypes = {
    children: PropTypes.node.isRequired,
};

export default App;
