import { keyframes } from 'styled-components';

export default {
    hi: 1,
    passion: 2,
    ui: 1.5,
    button: 4,
};

export const uiAnimation = keyframes`
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
`;

export const buttonShadowAnimation = keyframes`
    from {
      opacity: 0;
      transform: translate(5px, 5px);
    }
    1% {
      opacity: 1;
    }
    to {
      transform: translate(0, 0);
    }
`;
