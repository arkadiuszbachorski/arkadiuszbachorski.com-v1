import React from 'react';
import styled from 'styled-components';
import SocialMediaIcon from '../../atoms/SocialIcon/SocialMediaIcon';
import socialMedia from '../../../assets/data/socialMedia';

const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin: 4rem 0 2rem;
`;

const IconsContainer = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
`;

const Text = styled.span`
    text-align: center;
    width: 100%;
    margin-top: 4rem;

    span {
        color: ${(props) => props.theme.colors.primary};
    }
`;

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
