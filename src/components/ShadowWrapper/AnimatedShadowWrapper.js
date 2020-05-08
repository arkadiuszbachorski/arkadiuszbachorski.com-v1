import styled from 'styled-components';

const AnimatedShadowWrapper = styled.div`
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.font};
    background-color: ${(props) => props.theme.colors.background};
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        border: 2px solid ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.primary};
        top: ${(props) => props.shadowOffset?.top ?? 0}px;
        left: ${(props) => props.shadowOffset?.left ?? 0}px;
        transition: transform 0.25s;
    }

    &:hover::after {
        transform: translate(
            ${(props) => props.shadowOffset?.left * -2 ?? 0}px,
            ${(props) => props.shadowOffset?.top * -2 ?? 0}px
        );
    }

    &.darker::after {
        background-color: ${(props) => props.theme.colors.primaryDarker};
        border-color: ${(props) => props.theme.colors.primaryDarker};
    }
`;

export default AnimatedShadowWrapper;
