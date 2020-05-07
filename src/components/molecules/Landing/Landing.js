import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import Jumbotron from './Jumbotron/Jumbotron';
import Header from './Header/Header';
import landingBackground from '../../../assets/images/landing-background.jpg';
import Hi from './Hi/Hi';
import socialMedia from '../../../assets/data/socialMedia';
import SocialMediaIcon from '../../atoms/SocialIcon/SocialMediaIcon';
import animationsDelay, { uiAnimation } from '../../../animationsDelay';

const MainWrapper = styled.div`
    padding: 1rem;
    position: relative;
    height: 100vh;
    min-height: 500px;
    margin-bottom: 4rem;

    color: ${(props) => props.theme.colors.background};

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        min-height: 800px;
        padding: 2.8rem;

        margin-bottom: 5rem;
    }

    &::after {
        content: '';
        z-index: -100;
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${landingBackground});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`;

const SocialMediaIconsWrapper = styled.div`
    display: flex;
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

const Landing = () => {
    const landingRef = useRef(null);

    const [headerState, setHeaderState] = useState({
        isStuck: false,
        isAnimating: false,
    });

    useEffect(() => {
        const checkIfScrolled = debounce(() => {
            if (landingRef.current) {
                const shouldBeStuck = window.scrollY > landingRef.current.getBoundingClientRect().height;
                setHeaderState((oldState) => {
                    if (oldState.isStuck !== shouldBeStuck) {
                        setTimeout(() => {
                            setHeaderState({
                                isStuck: shouldBeStuck,
                                isAnimating: false,
                            });
                        }, 300);
                        return {
                            isStuck: shouldBeStuck,
                            isAnimating: true,
                        };
                    }
                    return oldState;
                });
            }
        }, 100);
        window.addEventListener('scroll', checkIfScrolled);

        return () => {
            window.removeEventListener('scroll', checkIfScrolled);
        };
    }, [landingRef]);

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
