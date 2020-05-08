import styled from 'styled-components';
import Modal from '../../../components/Modal/Modal';
import mailSent from '../../../assets/images/undraw/mail-sent.svg';
import mailSentFailure from '../../../assets/images/undraw/mail-sent-failure.svg';
import theme from '../../../theme';

export const StyledModal = styled(Modal)`
    margin: 1rem;
    max-width: 800px;
`;

export const Heading = styled.h6`
    text-align: center;
    font-size: 1.4rem;
    margin: 1rem 0;

    @media (${theme.mediaQuery.tablet}) {
        font-size: 2rem;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (${theme.mediaQuery.tablet}) {
        flex-wrap: wrap;
        flex-direction: row;
    }
`;

export const ImageWrapper = styled.div`
    width: 150px;
    height: 140px;
    margin: 1rem 2rem;
    background-repeat: no-repeat;
    background-size: contain;
    float: left;
`;

export const ImageSuccess = styled(ImageWrapper)`
    background-image: url(${mailSent});
`;

export const ImageFailure = styled(ImageWrapper)`
    background-image: url(${mailSentFailure});
`;

export const Text = styled.p`
    text-align: justify;
    display: block;

    @media (${theme.mediaQuery.tablet}) {
        width: calc(100% - 250px);
    }
`;

export const EmailAddress = styled.p`
    width: 100%;
    font-size: 1.2rem;
    margin-top: 2rem;
    text-align: center;
`;
