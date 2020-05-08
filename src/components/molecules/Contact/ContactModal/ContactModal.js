import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Modal from '../../../atoms/Modal/Modal';
import mailSent from '../../../../assets/images/undraw/mail-sent.svg';
import mailSentFailure from '../../../../assets/images/undraw/mail-sent-failure.svg';

const StyledModal = styled(Modal)`
    margin: 1rem;
    max-width: 800px;
`;

const Heading = styled.h6`
    text-align: center;
    font-size: 1.4rem;
    margin: 1rem 0;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        font-size: 2rem;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        flex-wrap: wrap;
        flex-direction: row;
    }
`;

const ImageWrapper = styled.div`
    width: 150px;
    height: 140px;
    margin: 1rem 2rem;
    background-repeat: no-repeat;
    background-size: contain;
    float: left;
`;

const ImageSuccess = styled(ImageWrapper)`
    background-image: url(${mailSent});
`;

const ImageFailure = styled(ImageWrapper)`
    background-image: url(${mailSentFailure});
`;

const Text = styled.p`
    text-align: justify;
    display: block;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        width: calc(100% - 250px);
    }
`;

const EmailAddress = styled.p`
    width: 100%;
    font-size: 1.2rem;
    margin-top: 2rem;
    text-align: center;
`;

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
