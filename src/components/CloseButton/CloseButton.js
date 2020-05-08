import React from 'react';
import styled from 'styled-components';
import CloseIcon from '../../assets/images/icons/close.inline.svg';

const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0.5rem;
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.background};
    border: none;
    cursor: pointer;

    svg {
        color: ${(props) => props.theme.colors.primary};
        transform: scale(1.5);
    }
`;

const CloseButton = (props) => (
    <Close {...props}>
        <CloseIcon />
    </Close>
);

export default CloseButton;
