import styled from 'styled-components';
import theme from '../../theme';
import landingBackground from '../../assets/images/background.webp';

const LandingWrapper = styled.div`
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

export default LandingWrapper;
