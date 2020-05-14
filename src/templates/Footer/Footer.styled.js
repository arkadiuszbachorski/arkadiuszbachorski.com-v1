import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../styles/theme';

export const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin: 8rem 0 2rem;

    @media (${theme.mediaQuery.tablet}) {
        margin-top: 14rem;
    }
`;

export const IconsContainer = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
`;

export const Text = styled.span`
    text-align: center;
    width: 100%;

    span {
        color: ${theme.colors.primary};
    }
`;

export const LanguageSwitcherWrapper = styled.div`
    display: flex;
    margin: 2rem 0;
`;

export const LanguageLink = styled(Link)`
    margin: 0 0.5rem;
    padding: 1rem;
    color: ${theme.colors.primary};
`;
