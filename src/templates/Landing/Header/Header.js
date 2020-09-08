import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'gatsby-plugin-intl-contentful';
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
import useMatchMedia from '../../../hooks/useMatchMedia';
import theme from '../../../styles/theme';

const Header = ({ headerState, animate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const isDesktop = useMatchMedia(`(${theme.mediaQuery.desktop})`);

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
            <LogoWrapper title="Arkadiusz Bachorski logo" animate={animate}>
                <span className="sr-only">Arkadiusz Bachorski</span>
                <Logo aria-hidden="true" />
            </LogoWrapper>
            <MenuButton onClick={openMenu} animate={animate}>
                <HamburgerIcon aria-hidden="true" />
                <span className="sr-only">
                    <FormattedMessage id="close" />
                </span>
            </MenuButton>
            <MenuWrapper isOpen={isOpen} animate={animate}>
                {['aboutMe', 'technologies', 'projects', 'contact'].map((section) => (
                    <MenuItem isFocusable={isOpen || isDesktop} key={section} href={`#${section}`} onClick={closeMenu}>
                        <FormattedMessage id={`${section}.title`} />
                    </MenuItem>
                ))}
                <StyledCloseButton focusable={isOpen} onClick={closeMenu} />
            </MenuWrapper>
            <MenuOverlay isOpen={isOpen} onClick={closeMenu} />
        </Wrapper>
    );
};

Header.propTypes = {
    headerState: PropTypes.shape({
        isStuck: PropTypes.bool,
        isAnimating: PropTypes.bool,
    }),
    animate: PropTypes.bool,
};

export default Header;
