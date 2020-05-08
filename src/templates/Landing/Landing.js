import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import socialMedia from '../../assets/data/socialMedia';
import SocialMediaIcon from '../../components/SocialIcon/SocialMediaIcon';
import useStickyNavbar from '../../hooks/useStickyNavbar';
import { MainWrapper, SocialMediaIconsWrapper } from './Landing.styled';

const Landing = ({ children }) => {
    const landingRef = useRef(null);
    const headerState = useStickyNavbar(landingRef);

    return (
        <MainWrapper ref={landingRef}>
            <Header headerState={headerState} />
            {children}
            <SocialMediaIconsWrapper>
                {socialMedia.map(({ name, url, icon: Icon }) => (
                    <SocialMediaIcon key={name} name={name} url={url}>
                        <Icon />
                    </SocialMediaIcon>
                ))}
            </SocialMediaIconsWrapper>
        </MainWrapper>
    );
};

Landing.propTypes = {
    children: PropTypes.node,
};

export default Landing;
