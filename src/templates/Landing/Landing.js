import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import SocialMediaIcon from '../../components/SocialIcon/SocialMediaIcon';
import useStickyNavbar from '../../hooks/useStickyNavbar';
import { SocialMediaIconsWrapper } from './Landing.styled';
import LandingWrapper from '../../components/LandingWrapper/LandingWrapper';
import useSocialMediaData from '../../assets/data/useSocialMediaData';

const Landing = ({ children, animate }) => {
    const landingRef = useRef(null);
    const headerState = useStickyNavbar(landingRef);
    const socialMedia = useSocialMediaData();

    return (
        <LandingWrapper ref={landingRef}>
            <Header headerState={headerState} animate={animate} />
            {children}
            <SocialMediaIconsWrapper animate={animate}>
                {socialMedia.map(({ name, url, icon }) => {
                    return (
                        <SocialMediaIcon
                            key={name}
                            name={name}
                            url={url}
                            dangerouslySetInnerHTML={{ __html: icon.svg.content }}
                        />
                    );
                })}
            </SocialMediaIconsWrapper>
        </LandingWrapper>
    );
};

Landing.propTypes = {
    children: PropTypes.node,
    animate: PropTypes.bool,
};

Landing.defaultProps = {
    animate: false,
};

export default Landing;
