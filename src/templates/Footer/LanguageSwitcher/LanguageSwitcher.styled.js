import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby-plugin-intl-contentful';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
    display: flex;
    margin: 2rem 0;
`;

export const Link = styled(GatsbyLink)`
    margin: 0 0.5rem;
    padding: 1rem;
    color: ${theme.colors.primary};
`;
