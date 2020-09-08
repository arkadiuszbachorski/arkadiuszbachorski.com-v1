import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'gatsby-plugin-intl-contentful';
import Modal from '../../../components/Modal/Modal';
import {
    ContentWrapper,
    EmailAddress,
    Heading,
    ImageFailure,
    ImageSuccess,
    StyledModal,
    Text,
} from './ContactModal.styled';

const ContactModal = ({ isOpen, closeModal, responseData: { status, email } }) => {
    const statusMessageId = useMemo(() => {
        if (status === 200) return '200';
        if (status === 500) return '500';
        if (status === 422) return '422';
        if (status >= 400 && status <= 499) return 'any400';
        return 'any';
    }, [status]);
    return (
        <StyledModal closeModal={closeModal} isOpen={isOpen}>
            <Heading>
                <FormattedMessage id="contact.form.modal.heading" />
            </Heading>
            <ContentWrapper>
                {status === 200 ? <ImageSuccess /> : <ImageFailure />}
                <Text>
                    <FormattedMessage id={`contact.form.modal.content.${statusMessageId}`} />
                </Text>
                {email && <EmailAddress>{email}</EmailAddress>}
            </ContentWrapper>
        </StyledModal>
    );
};

ContactModal.propTypes = {
    ...Modal.propTypes,
    responseData: PropTypes.shape({
        status: PropTypes.number,
        email: PropTypes.string,
    }),
};

export default ContactModal;
