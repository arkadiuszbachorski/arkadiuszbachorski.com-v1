import React from 'react';
import Modal from '../../../components/Modal/Modal';
import {
    TechnologiesWrapper,
    TechnologyGroupList,
    TechnologyGroupListItem,
    TechnologyGroupTitle,
    TechnologyGroupWrapper,
} from './TechnologiesModal.styled';
import useTechnologyGroupData from '../../../assets/data/useTechnologyGroupData';

const TechnologiesModal = ({ isOpen, closeModal }) => {
    const technologyGroups = useTechnologyGroupData();

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <TechnologiesWrapper>
                {technologyGroups.map((technologyGroup) => (
                    <TechnologyGroupWrapper key={technologyGroup.id}>
                        <TechnologyGroupTitle>{technologyGroup.name}</TechnologyGroupTitle>
                        <TechnologyGroupList>
                            {technologyGroup.technologies?.map((technology) => (
                                <TechnologyGroupListItem key={technology.id}>{technology.name}</TechnologyGroupListItem>
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
