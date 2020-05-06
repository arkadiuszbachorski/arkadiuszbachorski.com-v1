import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Button from '../../../atoms/Button/Button';
import animationsDelay, { buttonShadowAnimation, uiAnimation } from '../../../../animationsDelay';
import Passion from './Passion/Passion';

const Wrapper = styled.div`
    margin: 20vh 0 5rem;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        margin: 30vh 0 5rem;
    }
`;

const Name = styled.span`
    font-size: 1.2rem;
    display: block;
    line-height: 1.4;

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
    return (
        <Wrapper>
            <Name>
                <FormattedMessage id="jumbotron.presentation" /> <br />
                <span>Arkadiusz Bachorski</span>
            </Name>
            <Passion />
            <StyledButton className="ui-animation">
                <FormattedMessage id="jumbotron.button" />
            </StyledButton>
        </Wrapper>
    );
};

export default Jumbotron;
