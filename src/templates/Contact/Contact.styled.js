import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import envelopeUndraw from '../../assets/images/undraw/envelope.svg';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import theme from '../../theme';

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
        background-position: bottom left;
        background-repeat: no-repeat;
    }
`;

export const Description = styled.p`
    max-width: 700px;

    @media (${theme.mediaQuery.desktop}) {
        width: 500px;
    }
`;

export const Form = styled(FormikForm)`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${theme.colors.font};
    box-shadow: 5px 5px 0 ${theme.colors.primary};
    margin-top: 1rem;
    padding: 3rem 1.5rem;

    @media (${theme.mediaQuery.desktop}) {
        max-width: 430px;
    }
`;

export const Input = styled(Field)`
    box-shadow: -3px 3px 0 ${theme.colors.primary};
    border: 2px solid ${theme.colors.font};
    padding: 0.5rem 0.75rem;
    width: 100%;
    margin-bottom: 2rem;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    margin-bottom: 2rem;
    color: ${theme.colors.primaryDarker};
`;
