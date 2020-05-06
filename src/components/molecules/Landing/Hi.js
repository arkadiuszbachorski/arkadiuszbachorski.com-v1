import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import animationsDelay from '../../../animationsDelay';

const wrapperAnimation = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`;

const Wrapper = styled.div`
    z-index: 99999;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.font};
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${wrapperAnimation} 0.3s ${animationsDelay.hi}s forwards;
    pointer-events: none;
`;

const Heading = styled.h2`
    font-size: 4rem;
    font-weight: 200;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        font-size: 3vw;
    }
`;

const Hi = () => {
    return (
        <Wrapper>
            <Heading>
                <FormattedMessage id="hi" />
            </Heading>
        </Wrapper>
    );
};

export default Hi;
