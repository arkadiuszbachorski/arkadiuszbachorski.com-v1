import styled from 'styled-components';
import landingBackground from '../../assets/images/landing-background.jpg';
import animationsDelay, { uiAnimation } from '../../animationsDelay';

export const MainWrapper = styled.div`
    padding: 1rem;
    position: relative;
    height: 100vh;
    min-height: 500px;
    margin-bottom: 4rem;

    color: ${(props) => props.theme.colors.background};

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        min-height: 800px;
        padding: 2.8rem;

        margin-bottom: 5rem;
    }

    &::after {
        content: '';
        z-index: -100;
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${landingBackground});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`;
export const SocialMediaIconsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    animation: ${uiAnimation} 0.2s ${animationsDelay.ui}s backwards;
    position: absolute;
    bottom: 1rem;
    left: 0;

    > *:hover {
        path {
            color: ${(props) => props.theme.colors.primary};
        }
    }

    path {
        transition: color 0.3s;
        color: ${(props) => props.theme.colors.background};
    }

    > * {
        margin: 0 1rem;
    }
`;
