import styled from 'styled-components';
import Button from '../../../components/Button/Button';
import theme from '../../../styles/theme';
import animations from '../../../styles/animations';

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
    ${animations.button};

    &::after {
        ${animations.buttonShadow};
    }

    @media (${theme.mediaQuery.desktop}) {
        font-size: ${theme.font.size.l};
        padding: 1rem 2.5rem;
    }
`;

export const Passion = styled.h2`
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: 200;
    line-height: 1.4;
    ${animations.passion};

    @media (min-width: 600px) {
        font-size: 5vw;
    }

    @media (${theme.mediaQuery.desktop}) {
        font-size: 4vw;
        font-weight: 200;
    }
`;
