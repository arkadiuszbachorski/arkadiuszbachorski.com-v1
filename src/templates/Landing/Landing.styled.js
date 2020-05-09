import styled from 'styled-components';
import landingBackground from '../../assets/images/background.webp';
import animations from '../../animations';
import theme from '../../theme';

export const MainWrapper = styled.div`
    padding: 1rem;
    position: relative;
    height: 100vh;
    min-height: 500px;
    color: ${theme.colors.background};

    @media (${theme.mediaQuery.desktop}) {
        min-height: 800px;
        padding: 2.8rem;
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
    position: absolute;
    bottom: 1rem;
    left: 0;
    ${(props) => (props.animate ? animations.socials : '')}

    > *:hover {
        path {
            color: ${theme.colors.primary};
        }
    }

    path {
        transition: color 0.3s;
        color: ${theme.colors.background};
    }

    > * {
        margin: 0 1rem;
    }
`;
