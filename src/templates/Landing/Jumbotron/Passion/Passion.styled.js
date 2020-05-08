import styled, { keyframes } from 'styled-components';
import theme from '../../../../theme';

const caret = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

// eslint-disable-next-line import/prefer-default-export
export const PassionText = styled.h2`
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: 200;
    line-height: 1.4;

    @media (min-width: 600px) {
        font-size: 5vw;
    }

    @media (${theme.mediaQuery.desktop}) {
        font-size: 4vw;
        font-weight: 200;
    }

    &::after {
        content: '|';
        display: inline-block;
        margin-left: 0.25rem;
        width: 6px;
        height: 100%;
        color: transparent;
        background-color: ${theme.colors.primary};
    }

    &:not(.is-typing)::after {
        animation: 1s ${caret} step-end infinite;
    }
`;
