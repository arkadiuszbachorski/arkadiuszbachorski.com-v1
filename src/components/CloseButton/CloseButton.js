import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useIntl } from 'gatsby-plugin-intl';
import CloseIcon from '../../assets/images/icons/close.inline.svg';
import theme from '../../styles/theme';

const Close = styled.button.attrs((props) => ({
    tabIndex: !props.focusable ? '-1' : undefined,
}))`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 3rem;
    height: 3rem;
    background-color: ${theme.colors.background};
    border: none;
    cursor: pointer;

    svg {
        color: ${theme.colors.primary};
        transform: scale(1.5);
    }
`;

const CloseButton = ({ title, ...restProps }) => {
    const intl = useIntl();
    const parsedTitle = title || intl.formatMessage({ id: 'close' });
    return (
        <Close {...restProps} title={parsedTitle} aria-label={parsedTitle}>
            <CloseIcon aria-hidden="true" />
        </Close>
    );
};

CloseButton.propTypes = {
    title: PropTypes.string,
};

export default CloseButton;
