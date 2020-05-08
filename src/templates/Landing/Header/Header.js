import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Logo from '../../../assets/images/logo.inline.svg';
import HamburgerIcon from '../../../assets/images/icons/hamburger.inline.svg';
import useKeyboardKey from '../../../hooks/useKeyboardKey';
import {
    LogoWrapper,
    MenuButton,
    MenuItem,
    MenuOverlay,
    MenuWrapper,
    StyledCloseButton,
    Wrapper,
} from './Header.styled';

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
            <LogoWrapper title="Arkadiusz Bachorski logo">
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
