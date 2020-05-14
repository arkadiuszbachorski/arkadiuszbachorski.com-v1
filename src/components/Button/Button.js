import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimatedShadowWrapper from '../ShadowWrapper/AnimatedShadowWrapper';
import { buttonStylesWithoutShadow } from '../../styles/button';

const Btn = styled(AnimatedShadowWrapper)`
    ${buttonStylesWithoutShadow};
    box-shadow: none;
`;

const Button = ({ children, className, onClick, href, target, type, disabled }) => {
    const as = href ? 'a' : 'button';

    return (
        <Btn
            type={type}
            disabled={disabled}
            shadowOffset={{ top: -5, left: -5 }}
            className={`darker ${className ?? ''}`}
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
    className: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    target: PropTypes.oneOf(['_blank']),
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    disabled: PropTypes.bool,
};
export default Button;
