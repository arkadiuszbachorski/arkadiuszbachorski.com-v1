import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { ErrorMessage as FormikErrorMessage, Field, Formik, Form as FormikForm } from 'formik';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import envelopeUndraw from '../../../assets/images/undraw/envelope.svg';
import Button from '../../atoms/Button/Button';

const MainWrapper = styled(SectionWrapper)`
    display: flex;
    max-width: 1100px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    flex-direction: column;
    align-items: center;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        background-image: url(${envelopeUndraw});
        background-position: bottom left;
        background-repeat: no-repeat;
    }
`;

const Description = styled.p`
    max-width: 700px;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        width: 500px;
    }
`;

const Form = styled(FormikForm)`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${(props) => props.theme.colors.font};
    box-shadow: 5px 5px 0 ${(props) => props.theme.colors.primary};
    margin-top: 1rem;
    padding: 3rem 1.5rem;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        max-width: 430px;
    }
`;

const Input = styled(Field)`
    box-shadow: -3px 3px 0 ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.font};
    padding: 0.5rem 0.75rem;
    width: 100%;
    margin-bottom: 2rem;
`;

const ErrorMessage = styled(FormikErrorMessage)`
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.primaryDarker};
`;

const Contact = () => {
    const intl = useIntl();
    return (
        <MainWrapper>
            <SectionTitle>
                <FormattedMessage id="contact.title" />
            </SectionTitle>
            <Description>
                <FormattedMessage id="contact.text" />
            </Description>
            <Formik
                initialValues={{ email: '', message: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = intl.formatMessage({ id: 'contact.form.validation.email.required' });
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = intl.formatMessage({ id: 'contact.form.validation.email.invalid' });
                    }
                    if (!values.message) {
                        errors.message = intl.formatMessage({ id: 'contact.form.validation.message.required' });
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 5000);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Input
                            type="email"
                            name="email"
                            placeholder={intl.formatMessage({ id: 'contact.form.placeholder.email' })}
                        />
                        <ErrorMessage name="email" component="div" />
                        <Input
                            component="textarea"
                            name="message"
                            placeholder={intl.formatMessage({ id: 'contact.form.placeholder.message' })}
                            rows="8"
                        />
                        <ErrorMessage name="message" component="div" />
                        <Button type="submit" disabled={isSubmitting}>
                            <FormattedMessage id="contact.form.button" />
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainWrapper>
    );
};

export default Contact;
