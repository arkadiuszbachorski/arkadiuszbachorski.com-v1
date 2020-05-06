import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Logo from '../../../../assets/images/logo.inline.svg';
import socialMedia from '../../../../assets/data/socialMedia';
import SocialMediaIcon from '../../../atoms/SocialIcon/SocialMediaIcon';
import CloseButton from '../../../atoms/CloseButton/CloseButton';
import HamburgerIcon from '../../../../assets/images/icons/hamburger.inline.svg';
import animationsDelay, { uiAnimation } from '../../../../animationsDelay';

const sections = ['aboutMe', 'technologies', 'projects', 'contact'];

const LogoWrapper = styled.div`
    max-width: 60vw;
    animation: ${uiAnimation} 0.2s ${animationsDelay.ui}s backwards;

    svg {
        width: 100%;
    }

    @media (min-width: 320px) {
        max-width: 70vw;
    }
`;

const Wrapper = styled.header`
    display: flex;
    flex-wrap: wrap;
`;

const MenuWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.background};
    box-shadow: 5px 0 0 ${(props) => props.theme.colors.primary};
    padding: 2rem 0;
    width: 280px;
    height: 100vh;
    transition: transform 0.3s;
    transform: translateX(${(props) => (props.isOpen ? '0' : '-290px')});
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    z-index: 1001;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        width: unset;
        height: unset;
        padding: 0;
        position: static;
        margin-left: auto;
        flex-direction: row;
        box-shadow: none;
        background-color: transparent;
        transform: translateX(0);
        top: 0;
        left: 0;
        align-items: center;
        animation: ${uiAnimation} 0.2s ${animationsDelay.ui}s backwards;
    }
`;

const MenuItem = styled.a`
    margin: 2rem;
    font-size: ${(props) => props.theme.font.size.l};
    color: ${(props) => props.theme.colors.font};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        margin: 0 0 0 3rem;
        color: ${(props) => props.theme.colors.background};
    }
`;

const SocialMediaIconsWrapper = styled.div`
    display: flex;
    order: 3;
    width: 100%;
    justify-content: center;
    animation: ${uiAnimation} 0.2s ${animationsDelay.ui}s backwards;
    position: absolute;
    bottom: 1rem;
    left: 0;

    > *:hover {
        path {
            color: ${(props) => props.theme.colors.primary};
        }
    }

    path {
        transition: color 0.3s;
        color: ${(props) => props.theme.colors.background};
    }

    > * {
        margin: 0 1rem;
    }
`;

const MenuButton = styled.button`
    margin-left: auto;
    background-color: transparent;
    border: none;
    width: 4rem;
    height: 4rem;
    padding: 0;
    position: relative;
    top: -1rem;
    animation: ${uiAnimation} 0.2s ${animationsDelay.ui}s backwards;

    svg {
        transform: scale(1.4);
    }

    path {
        color: ${(props) => props.theme.colors.background};
    }

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        display: none;
    }
`;

const MenuOverlay = styled.button`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    transition: opacity 0.2s;
    background-color: ${(props) => `${props.theme.colors.primary}CC`};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        display: none;
        pointer-events: none;
    }
`;

const StyledCloseButton = styled(CloseButton)`
    @media (${(props) => props.theme.mediaQuery.desktop}) {
        display: none;
    }
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <MenuWrapper isOpen={isOpen}>
                {sections.map((section) => (
                    <MenuItem key={section} href={`#${section}`}>
                        <FormattedMessage id={`${section}.title`} />
                    </MenuItem>
                ))}
                <StyledCloseButton onClick={() => setIsOpen(false)} />
            </MenuWrapper>
            <MenuOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
            <SocialMediaIconsWrapper>
                {socialMedia.map(({ name, url, icon: Icon }) => (
                    <SocialMediaIcon key={name} name={name} url={url}>
                        <Icon />
                    </SocialMediaIcon>
                ))}
            </SocialMediaIconsWrapper>
            <MenuButton onClick={() => setIsOpen(true)}>
                <HamburgerIcon />
            </MenuButton>
        </Wrapper>
    );
};

export default Header;
