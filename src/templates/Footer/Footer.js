import React from 'react';
import SocialMediaIcon from '../../components/SocialIcon/SocialMediaIcon';
import socialMedia from '../../assets/data/socialMedia';
import { FooterContainer, IconsContainer, LanguageLink, LanguageSwitcherWrapper, Text } from './Footer.styled';

const Footer = () => (
    <FooterContainer>
        <IconsContainer>
            {socialMedia.map(({ name, url, icon: Icon }) => (
                <SocialMediaIcon key={name} name={name} url={url} withShadow>
                    <Icon />
                </SocialMediaIcon>
            ))}
        </IconsContainer>
        <LanguageSwitcherWrapper>
            {['pl', 'en'].map((language) => (
                <LanguageLink key={language} to={`/${language}`}>
                    {language.toUpperCase()}
                </LanguageLink>
            ))}
        </LanguageSwitcherWrapper>
        <Text>
            Arkadiusz Bachorski <span>&copy; 2020</span>
        </Text>
    </FooterContainer>
);

export default Footer;
