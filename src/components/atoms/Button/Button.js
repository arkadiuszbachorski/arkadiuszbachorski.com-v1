import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShadowWrapper from '../ShadowWrapper/ShadowWrapper';

const Btn = styled(ShadowWrapper)`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.font};
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0.75rem 2rem;
    cursor: pointer;
    text-decoration: none;
    margin-left: 5px;
`;

const Button = ({ children, onClick, href, target }) => {
    const as = href ? 'a' : 'button';

    return (
        <Btn
            shadowOffset={{ top: -5, left: -5 }}
            className="can-hover darker"
            href={href}
            as={as}
            onClick={onClick}
            target={target}
        >
            {children}
        </Btn>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    target: PropTypes.oneOf(['_blank']),
};

export default Button;
