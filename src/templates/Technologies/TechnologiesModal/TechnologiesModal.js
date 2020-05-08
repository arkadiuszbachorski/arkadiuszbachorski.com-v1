import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import technologies from '../../../assets/data/technologies';
import Modal from '../../../components/Modal/Modal';
import {
    TechnologiesWrapper,
    TechnologyGroupList,
    TechnologyGroupListItem,
    TechnologyGroupTitle,
    TechnologyGroupWrapper,
} from './TechnologiesModal.styled';

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
