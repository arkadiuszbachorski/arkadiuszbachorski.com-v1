import React from 'react';
import styled from 'styled-components';
import Jumbotron from './Jumbotron';
import Header from './Header/Header';
import landingBackground from '../../../assets/images/landing-background.jpg';
import Hi from './Hi';

const MainWrapper = styled.div`
    padding: 1rem;
    position: relative;
    height: 100vh;
    min-height: 500px;

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

const Landing = () => {
    return (
        <MainWrapper>
            <Header />
            <Hi />
            <Jumbotron />
        </MainWrapper>
    );
};

export default Landing;
