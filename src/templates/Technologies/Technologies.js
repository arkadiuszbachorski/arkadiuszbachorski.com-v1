import React, { useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import TechnologiesModal from './TechnologiesModal/TechnologiesModal';
import { ButtonWrapper, Description, MainWrapper, UndrawWrapper } from './Technologies.styled';

const Technologies = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <MainWrapper id="technologies">
            <SectionTitle>
                <FormattedMessage id="technologies.title" />
            </SectionTitle>
            <Description>
                <FormattedMessage id="technologies.text" />
            </Description>
            <UndrawWrapper aria-hidden="true" />
            <ButtonWrapper>
                <Button onClick={openModal}>
                    <FormattedMessage id="technologies.button" />
                </Button>
            </ButtonWrapper>
            <TechnologiesModal isOpen={modalOpen} closeModal={closeModal} />
        </MainWrapper>
    );
};

export default Technologies;
