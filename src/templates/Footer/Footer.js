import React from 'react';
import SocialMediaIcon from '../../components/SocialIcon/SocialMediaIcon';
import socialMedia from '../../assets/data/socialMedia';
import { FooterContainer, IconsContainer, Text } from './Footer.styled';

const Footer = () => (
    <FooterContainer>
        <IconsContainer>
            {socialMedia.map(({ name, url, icon: Icon }) => (
                <SocialMediaIcon key={name} name={name} url={url} withShadow>
                    <Icon />
                </SocialMediaIcon>
            ))}
        </IconsContainer>
        <Text>
            Arkadiusz Bachorski <span>&copy; 2020</span>
        </Text>
    </FooterContainer>
);

export default Footer;
