import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Formik } from 'formik';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactModal from './ContactModal/ContactModal';
import Loading from '../../components/Loading/Loading';
import { MainWrapper, Description, ErrorMessage, Form, Input, Label, StyledButton } from './Contact.styled';

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
                    try {
                        const token = await executeRecaptcha('email');
                        const formData = new FormData();
                        Object.entries(values).forEach(([key, value]) => {
                            formData.append(key, value);
                        });
                        formData.append('token', token);
                        const response = await fetch('https://arkadiuszbachorskimail.hekko24.pl/', {
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
                    } catch (error) {
                        setModalData({
                            isOpen: true,
                            response: {
                                status: 'no-connection',
                                email: null,
                            },
                        });
                    }
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Label htmlFor="email">
                            <FormattedMessage id="contact.form.placeholder.email" />
                        </Label>
                        <Input id="email" type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <Label htmlFor="subject">
                            <FormattedMessage id="contact.form.placeholder.subject" />
                        </Label>
                        <Input id="subject" type="subject" name="subject" />
                        <ErrorMessage name="subject" component="div" />
                        <Label htmlFor="message">
                            <FormattedMessage id="contact.form.placeholder.message" />
                        </Label>
                        <Input id="message" component="textarea" name="message" rows="10" />
                        <ErrorMessage name="message" component="div" />
                        <StyledButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? <Loading /> : <FormattedMessage id="contact.form.button" />}
                        </StyledButton>
                    </Form>
                )}
            </Formik>
        </MainWrapper>
    );
};

export default Contact;
