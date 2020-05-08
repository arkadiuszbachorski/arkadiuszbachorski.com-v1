import React, { useRef } from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import Header from './Header/Header';
import Hi from './Hi/Hi';
import socialMedia from '../../assets/data/socialMedia';
import SocialMediaIcon from '../../components/SocialIcon/SocialMediaIcon';
import useStickyNavbar from '../../hooks/useStickyNavbar';
import { MainWrapper, SocialMediaIconsWrapper } from './Landing.styled';

const Landing = () => {
    const landingRef = useRef(null);
    const headerState = useStickyNavbar(landingRef);

    return (
        <MainWrapper ref={landingRef}>
            <Header headerState={headerState} />
            <Hi />
            <Jumbotron />
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

export default Landing;
