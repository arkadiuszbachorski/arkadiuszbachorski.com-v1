import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';
import useTypewriter from '../../../../../hooks/useTypewriter';
import animationsDelay from '../../../../../animationsDelay';

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

const PassionText = styled.span`
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: 200;
    line-height: 1.4;

    @media (min-width: 600px) {
        font-size: 5vw;
    }

    @media (${(props) => props.theme.mediaQuery.desktop}) {
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
        background-color: ${(props) => props.theme.colors.primary};
    }

    &:not(.is-typing)::after {
        animation: 1s ${caret} step-end infinite;
    }
`;

const Passion = () => {
    const intl = useIntl();
    const passionString = useMemo(() => intl.formatMessage({ id: 'jumbotron.passion' }), [intl]);
    const typewriter = useTypewriter(passionString, 1500 / passionString.length, animationsDelay.passion * 1000);

    return <PassionText className={typewriter.isTyping ? 'is-typing' : ''}>{typewriter.content}</PassionText>;
};

export default Passion;
