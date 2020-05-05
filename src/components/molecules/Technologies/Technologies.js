import React, { useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import reactUndraw from '../../../assets/images/react.svg';
import Button from '../../atoms/Button/Button';
import TechnologiesModal from './TechnologiesModal';

const MainWrapper = styled(SectionWrapper)`
    display: flex;
    max-width: 1050px;
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
    }
`;

const UndrawWrapper = styled.div`
    background-image: url(${reactUndraw});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    order: 2;
    width: 300px;
    height: 200px;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        order: 3;
        width: 400px;
        height: 250px;
    }
`;

const Description = styled.p`
    max-width: 700px;
    text-align: justify;

    order: 3;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        width: 500px;
        margin-top: 0;
        order: 2;
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
    margin-top: 3rem;
    max-width: 700px;
    order: 4;
    display: flex;
    justify-content: center;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        justify-content: flex-start;
    }
`;

const Technologies = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <MainWrapper>
            <SectionTitle>
                <FormattedMessage id="technologies.title" />
            </SectionTitle>
            <Description>
                <FormattedMessage id="technologies.text" />
            </Description>
            <UndrawWrapper />
            <ButtonWrapper>
                <Button onClick={() => setModalOpen(true)}>
                    <FormattedMessage id="technologies.button" />
                </Button>
            </ButtonWrapper>
            <TechnologiesModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </MainWrapper>
    );
};

export default Technologies;
