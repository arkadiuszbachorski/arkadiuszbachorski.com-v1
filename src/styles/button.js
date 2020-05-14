import { css } from 'styled-components';
import theme from './theme';

export const buttonStylesWithoutShadow = css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.font};
    border: none;
    padding: 0.75rem 2rem;
    cursor: pointer;
    text-decoration: none;
    margin-left: 5px;
    font-weight: 500;

    &:disabled {
        cursor: default;
        background-color: ${theme.colors.accent};

        &::after {
            opacity: 0.4;
        }
    }
`;
