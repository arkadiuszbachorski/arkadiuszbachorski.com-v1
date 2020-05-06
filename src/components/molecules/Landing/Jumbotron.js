import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import Button from '../../atoms/Button/Button';
import useTypewriter from '../../../hooks/useTypewriter';
import animationsDelay, { buttonShadowAnimation, uiAnimation } from '../../../animationsDelay';

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

const Wrapper = styled.div`
    margin: 20vh 0 5rem;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        margin: 30vh 0 5rem;
    }
`;

const JumbotronTexts = styled.span`
    display: block;
    line-height: 1.4;
`;

const Hi = styled(JumbotronTexts)`
    font-size: 1.2rem;
    display: block;

    span {
        color: ${(props) => props.theme.colors.primary};
    }

    @media (min-width: 355px) {
        br {
            display: none;
        }
    }

    @media (min-width: 600px) {
        font-size: 4vw;
    }

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        font-size: 2vw;
    }
`;

const Passion = styled(JumbotronTexts)`
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: 200;

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

const StyledButton = styled(Button)`
    animation: ${uiAnimation} 0.2s ${animationsDelay.button}s backwards;

    &::after {
        animation: ${buttonShadowAnimation} 0.3s ${animationsDelay.button + 0.2}s backwards;
    }

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        font-size: ${(props) => props.theme.font.size.l};
        padding: 1rem 2.5rem;
    }
`;

const Jumbotron = () => {
    const intl = useIntl();
    const passionString = useMemo(() => intl.formatMessage({ id: 'jumbotron.passion' }), [intl]);
    const typewriter = useTypewriter(passionString, 1500 / passionString.length, animationsDelay.passion * 1000);

    return (
        <Wrapper>
            <Hi>
                <FormattedMessage id="jumbotron.presentation" /> <br />
                <span>Arkadiusz Bachorski</span>
            </Hi>
            <Passion className={typewriter.isTyping ? 'is-typing' : ''}>{typewriter.content}</Passion>
            <StyledButton className="ui-animation">
                <FormattedMessage id="jumbotron.button" />
            </StyledButton>
        </Wrapper>
    );
};

export default Jumbotron;
