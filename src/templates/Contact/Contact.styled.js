import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import envelopeUndraw from '../../assets/images/undraw/envelope.svg';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import theme from '../../styles/theme';
import Button from '../../components/Button/Button';
import { shadowBorder } from '../../styles/shadowBorder';

export const MainWrapper = styled(SectionWrapper)`
    display: flex;
    max-width: 1100px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center;

    @media (${theme.mediaQuery.desktop}) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        background-image: url(${envelopeUndraw});
        background-position: 1rem 90%;
        background-size: 38%;
        background-repeat: no-repeat;
    }
`;

export const Description = styled.p`
    max-width: 700px;

    @media (${theme.mediaQuery.desktop}) {
        width: 450px;
    }
`;

export const Form = styled(FormikForm)`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 450px) {
        ${shadowBorder};
        box-shadow: 5px 5px 0 ${theme.colors.primary};
        padding: 1rem 2rem 2rem;
        margin-top: 1rem;
    }

    @media (${theme.mediaQuery.tablet}) {
        padding-left: 3rem;
        padding-right: 3rem;
    }

    @media (${theme.mediaQuery.desktop}) {
        width: 530px;
    }
`;

export const Label = styled.label`
    text-align: left;
    position: relative;
    background-color: ${theme.colors.background};
    top: 0.65rem;
    left: 0.87rem;
    align-self: flex-start;
    padding: 0.1rem 0.5rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: ${theme.colors.font};
    margin-top: 0.7rem;
`;

export const Input = styled(Field)`
    box-shadow: -3px 3px 0 ${theme.colors.primary};
    ${shadowBorder};
    padding: 1.25rem 1.25rem 0.75rem;
    width: 100%;
    margin-bottom: 1rem;
    transition: border-color 0.3s;

    &:focus,
    &:active {
        border-color: ${theme.colors.accent};
        outline: none;
    }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    width: 100%;
    color: ${theme.colors.primaryDarker};
    font-weight: 500;
`;

export const StyledButton = styled(Button)`
    margin-top: 2rem;
`;
