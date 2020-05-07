import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'gatsby-plugin-intl';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../../../assets/images/logo.inline.svg';
import CloseButton from '../../../atoms/CloseButton/CloseButton';
import HamburgerIcon from '../../../../assets/images/icons/hamburger.inline.svg';
import animationsDelay, { uiAnimation } from '../../../../animationsDelay';
import useKeyboardKey from '../../../../hooks/useKeyboardKey';
import landingBackground from '../../../../assets/images/landing-background.jpg';

const headerStickingAnimation = keyframes`
from {
opacity: 0;
transform: translateY(-5rem);
}
to {
opacity: 1;
transform: translateY(0);
}
`;

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
    transition: transform 1.3s, opacity 0.3s;
    opacity: 1;
    align-items: center;

    &.is-stuck,
    &.is-animating {
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        z-index: 300;
        padding: 0.25rem 1rem;
        border-bottom: 2px solid ${(props) => props.theme.colors.primary};
        color: white;
        background-image: url(${landingBackground});
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;

        @media (${(props) => props.theme.mediaQuery.desktop}) {
            padding: 1rem 2.8rem;
        }
    }

    &.is-stuck {
        animation: ${headerStickingAnimation} 0.3s;
    }

    &.is-animating {
        opacity: 0;
        transform: translateY(-5rem);
    }
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
    transform: translateX(${(props) => (props.isOpen ? '0' : '-320px')});
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

const MenuItem = styled(AnchorLink)`
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

const MenuButton = styled.button`
    margin-left: auto;
    background-color: transparent;
    border: none;
    width: 4rem;
    height: 4rem;
    padding: 0;
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

const Header = ({ headerState }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);
    const openMenu = () => setIsOpen(true);

    useKeyboardKey('Escape', () => {
        closeMenu();
    });

    return (
        <Wrapper
            className={`${headerState.isStuck ? 'is-stuck' : 'is-top'} ${
                headerState.isAnimating ? 'is-animating' : ''
            }`}
        >
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <MenuWrapper isOpen={isOpen}>
                {['aboutMe', 'technologies', 'projects', 'contact'].map((section) => (
                    <MenuItem key={section} href={`#${section}`} onClick={closeMenu}>
                        <FormattedMessage id={`${section}.title`} />
                    </MenuItem>
                ))}
                <StyledCloseButton onClick={closeMenu} />
            </MenuWrapper>
            <MenuOverlay isOpen={isOpen} onClick={closeMenu} />
            <MenuButton onClick={openMenu}>
                <HamburgerIcon />
            </MenuButton>
        </Wrapper>
    );
};

Header.propTypes = {
    headerState: PropTypes.shape({
        isStuck: PropTypes.bool,
        isAnimating: PropTypes.bool,
    }),
};

export default Header;
