import styled from 'styled-components';
import animations from '../../animations';
import theme from '../../theme';

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
