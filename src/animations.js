import { css, keyframes } from 'styled-components';

const socialsAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

const uiAnimation = keyframes`
from {
      opacity: 0;
      transform: translateY(-4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

const buttonAnimation = keyframes`
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
`;

const buttonShadowAnimation = keyframes`
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

const jumbotronAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateX(-5rem);
    }
    70% {
        opacity: 0.7;
        transform: translateX(0);
    }
    to {
        opacity: 1;
    }
`;

export default {
    passion: css`
        animation: ${jumbotronAnimation} 0.5s 0.5s backwards;
    `,
    socials: css`
        animation: ${socialsAnimation} 0.2s 1s backwards;
    `,
    ui: css`
        animation: ${uiAnimation} 0.2s 1s backwards;
    `,
    button: css`
        animation: ${buttonAnimation} 0.4s 1.4s backwards;
    `,
    buttonShadow: css`
        animation: ${buttonShadowAnimation} 0.2s 1.8s backwards;
    `,
};
