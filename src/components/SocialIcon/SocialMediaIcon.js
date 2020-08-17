import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import AnimatedShadowWrapper from '../ShadowWrapper/AnimatedShadowWrapper';

const wrapperStyles = css`
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        height: 2rem;
    }
`;

const ShadowIconWrapper = styled(AnimatedShadowWrapper)`
    ${wrapperStyles}
`;

const IconWrapper = styled.div`
    ${wrapperStyles}
`;

const SocialMediaIcon = ({ url, name, withShadow, dangerouslySetInnerHTML }) => {
    return (
        <a href={url} title={name} aria-label={name}>
            {withShadow ? (
                <ShadowIconWrapper
                    shadowOffset={{ top: 5, left: 5 }}
                    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
                />
            ) : (
                <IconWrapper dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
            )}
        </a>
    );
};

SocialMediaIcon.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    withShadow: PropTypes.bool,
    dangerouslySetInnerHTML: PropTypes.any.isRequired,
};

SocialMediaIcon.defaultProps = {
    withShadow: false,
};

export default SocialMediaIcon;
