import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import technologies from '../../../assets/data/technologies';
import Modal from '../../atoms/Modal/Modal';

const TechnologiesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const TechnologyGroupWrapper = styled.section`
    width: 230px;
    margin: 1rem;
`;

const TechnologyGroupTitle = styled.h4`
    font-weight: bold;
`;

const TechnologyGroupList = styled.ul`
    list-style: none;
    padding: 0;
`;

const TechnologyGroupListItem = styled.li`
    margin: 0.5rem 0;
    &::before {
        content: '';
        display: inline-block;
        background: ${(props) => props.theme.colors.primary};
        width: 0.5rem;
        height: 0.5rem;
        position: relative;
        bottom: 1px;
        margin-right: 0.5rem;
    }
`;

const TechnologiesModal = ({ isOpen, closeModal }) => {
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <TechnologiesWrapper>
                {Object.entries(technologies).map(([key, list]) => (
                    <TechnologyGroupWrapper key={key}>
                        <TechnologyGroupTitle>
                            <FormattedMessage id={`technologies.group.${key}`} />
                        </TechnologyGroupTitle>
                        <TechnologyGroupList>
                            {list.map((item) => (
                                <TechnologyGroupListItem key={item}>{item}</TechnologyGroupListItem>
                            ))}
                        </TechnologyGroupList>
                    </TechnologyGroupWrapper>
                ))}
            </TechnologiesWrapper>
        </Modal>
    );
};

TechnologiesModal.propTypes = {
    ...Modal.propTypes,
};

export default TechnologiesModal;
