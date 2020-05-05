import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.button`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    transition: opacity 0.2s;
    background-color: ${(props) => `${props.theme.colors.primary}CC`};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
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

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0.5rem;
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.background};
    border: none;
    cursor: pointer;

    &::after,
    &::before {
        content: '';
        display: block;
        width: 2px;
        height: 1rem;
        background-color: ${(props) => props.theme.colors.primary};
        position: absolute;
        left: 1.5rem;
        top: 1rem;
    }

    &::after {
        transform: rotate(45deg);
    }

    &::before {
        transform: rotate(-45deg);
    }
`;

const classIdentifier = 'modal-closing-background';

const Modal = ({ isOpen, setOpen, children }) => {
    const closeModal = () => setOpen(false);
    useEffect(() => {
        const handle = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keyup', handle);

        return () => {
            document.removeEventListener('keyup', handle);
        };
    });

    return (
        <Wrapper
            isOpen={isOpen}
            onClick={(e) => {
                if (e.target.classList.contains(classIdentifier)) {
                    closeModal();
                }
            }}
            className={classIdentifier}
        >
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
