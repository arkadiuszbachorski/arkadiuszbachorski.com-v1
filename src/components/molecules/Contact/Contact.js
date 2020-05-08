import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { ErrorMessage as FormikErrorMessage, Field, Form as FormikForm, Formik } from 'formik';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import envelopeUndraw from '../../../assets/images/undraw/envelope.svg';
import Button from '../../atoms/Button/Button';
import ContactModal from './ContactModal/ContactModal';
import Loading from '../../atoms/Loading/Loading';

const MainWrapper = styled(SectionWrapper)`
    display: flex;
    max-width: 1100px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
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
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [modalData, setModalData] = useState({
        isOpen: false,
        response: null,
    });

    const closeModal = () =>
        setModalData((oldData) => ({
            ...oldData,
            isOpen: false,
        }));

    return (
        <MainWrapper id="contact">
            {modalData.response !== null && (
                <ContactModal isOpen={modalData.isOpen} closeModal={closeModal} responseData={modalData.response} />
            )}
            <SectionTitle>
                <FormattedMessage id="contact.title" />
            </SectionTitle>
            <Description>
                <FormattedMessage id="contact.text" />
            </Description>
            <Formik
                initialValues={{ email: '', subject: '', message: '' }}
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
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const token = await executeRecaptcha('email');
                    const formData = new FormData();
                    Object.entries(values).forEach(([key, value]) => {
                        formData.append(key, value);
                    });
                    formData.append('token', token);
                    const response = await fetch('http://arkadiuszbachorskimail.hekko24.pl/', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept-Language': window.location.href.includes('pl') ? 'pl-PL' : 'en-EN',
                        },
                    });
                    const data = await response.json();
                    setModalData({
                        isOpen: true,
                        response: {
                            status: response.status,
                            email: data.email ?? null,
                        },
                    });
                    if (response.status === 200) resetForm();
                    setSubmitting(false);
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
                            type="subject"
                            name="subject"
                            placeholder={intl.formatMessage({ id: 'contact.form.placeholder.subject' })}
                        />
                        <ErrorMessage name="subject" component="div" />
                        <Input
                            component="textarea"
                            name="message"
                            placeholder={intl.formatMessage({ id: 'contact.form.placeholder.message' })}
                            rows="8"
                        />
                        <ErrorMessage name="message" component="div" />
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? <Loading /> : <FormattedMessage id="contact.form.button" />}
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainWrapper>
    );
};

export default Contact;
