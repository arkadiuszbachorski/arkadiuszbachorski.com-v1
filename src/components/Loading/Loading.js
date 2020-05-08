import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    0%   { transform: scale(1,1)    translateY(0); }
    5%  { transform: scale(1.1,.9) translateY(0); }
    15%  { transform: scale(.9,1.1) translateY(-0.3rem); }
    25%  { transform: scale(1,1)    translateY(0); }
    100% { transform: scale(1,1)    translateY(0); }
`;

const Wrapper = styled.span`
    position: relative;
    top: 0.1rem;
`;

const Dot = styled.span`
    width: 0.6rem;
    height: 0.6rem;
    margin: 0 0.25rem;
    display: inline-block;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    animation: ${bounce} 1.5s ${(props) => props.animationDelay}s infinite;
`;

const Loading = () => {
    return (
        <Wrapper>
            <Dot animationDelay={0} />
            <Dot animationDelay={0.2} />
            <Dot animationDelay={0.4} />
        </Wrapper>
    );
};

export default Loading;
