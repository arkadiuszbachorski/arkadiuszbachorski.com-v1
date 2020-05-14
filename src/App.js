import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import GlobalStyle from './styles/global';

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
