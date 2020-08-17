import React from 'react';
import SocialMediaIcon from '../../components/SocialIcon/SocialMediaIcon';
import { FooterContainer, IconsContainer, Text } from './Footer.styled';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import useSocialMediaData from '../../assets/data/useSocialMediaData';

const Footer = () => {
    const socialMedia = useSocialMediaData();
    return (
        <FooterContainer>
            <IconsContainer>
                {socialMedia.map(({ name, url, icon }) => (
                    <SocialMediaIcon
                        key={name}
                        name={name}
                        url={url}
                        withShadow
                        dangerouslySetInnerHTML={{ __html: icon.svg.content }}
                    />
                ))}
            </IconsContainer>
            <LanguageSwitcher />
            <Text>
                Arkadiusz Bachorski <span>&copy; 2020</span>
            </Text>
        </FooterContainer>
    );
};

export default Footer;
