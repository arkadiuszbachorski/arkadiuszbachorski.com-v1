import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton/CloseButton';
import useKeyboardKey from '../../../hooks/useKeyboardKey';

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    transition: opacity 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
`;

const CloseWrapper = styled.button`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -5;
    transition: opacity 0.2s;
    background-color: ${(props) => `${props.theme.colors.primary}CC`};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`;

const Content = styled.div`
    position: relative;
    background-color: white;
    padding: 2rem;
    max-width: 90vw;
    max-height: 90vh;
    border: 2px solid ${(props) => props.theme.colors.font};
    box-shadow: 5px 5px 0 ${(props) => props.theme.colors.primary};
    overflow-y: auto;
`;

const classIdentifier = 'modal-closing-background';

const Modal = ({ isOpen, setOpen, children }) => {
    const closeModal = () => setOpen(false);
    useKeyboardKey('Escape', closeModal);

    return (
        <Wrapper isOpen={isOpen}>
            <CloseWrapper
                isOpen={isOpen}
                onClick={(e) => {
                    if (e.target.classList.contains(classIdentifier)) {
                        closeModal();
                    }
                }}
                className={classIdentifier}
            />
            <Content>
                <CloseButton onClick={closeModal} />
                {children}
            </Content>
        </Wrapper>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
