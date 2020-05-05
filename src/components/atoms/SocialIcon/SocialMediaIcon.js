import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimatedShadowWrapper from '../ShadowWrapper/AnimatedShadowWrapper';

const iconWrapperRules = `
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ShadowIconWrapper = styled(AnimatedShadowWrapper)`
    ${iconWrapperRules}
`;

const IconWrapper = styled.div`
    ${iconWrapperRules}
`;

const SocialMediaIcon = ({ url, children, name, withShadow }) => {
    return (
        <a href={url} title={name} aria-label={name}>
            {withShadow ? (
                <ShadowIconWrapper shadowOffset={{ top: 5, left: 5 }}>{children}</ShadowIconWrapper>
            ) : (
                <IconWrapper>{children}</IconWrapper>
            )}
        </a>
    );
};

SocialMediaIcon.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    withShadow: PropTypes.bool,
};

SocialMediaIcon.defaultProps = {
    withShadow: false,
};

export default SocialMediaIcon;
