import styled from 'styled-components';
import Button from '../../../components/Button/Button';
import animationsDelay, { buttonShadowAnimation, uiAnimation } from '../../../animationsDelay';
import theme from '../../../theme';

export const Wrapper = styled.div`
    position: absolute;
    top: 35vh;
`;
export const Name = styled.h2`
    font-size: 1.2rem;
    display: block;
    line-height: 1.4;

    span {
        color: ${theme.colors.primary};
    }

    @media (min-width: 355px) {
        br {
            display: none;
        }
    }

    @media (min-width: 600px) {
        font-size: 4vw;
    }

    @media (${theme.mediaQuery.desktop}) {
        font-size: 2vw;
    }
`;
export const StyledButton = styled(Button)`
    animation: ${uiAnimation} 0.2s ${animationsDelay.button}s backwards;

    &::after {
        animation: ${buttonShadowAnimation} 0.3s ${animationsDelay.button + 0.2}s backwards;
    }

    @media (${theme.mediaQuery.desktop}) {
        font-size: ${theme.font.size.l};
        padding: 1rem 2.5rem;
    }
`;
