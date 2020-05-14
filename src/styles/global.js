import { createGlobalStyle } from 'styled-components';
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
  
  
  .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
}
`;

export default GlobalStyle;
