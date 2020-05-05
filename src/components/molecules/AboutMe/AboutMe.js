import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import Profile from '../../../assets/images/profile.inline.svg';

const MainWrapper = styled(SectionWrapper)`
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
`;

const GridWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: auto auto auto;
    grid-template-columns: 100%;
    grid-template-areas:
        'photo'
        'text1'
        'text2';

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        max-width: 700px;
        grid-template-rows: auto auto;
        grid-template-columns: 200px auto;
        grid-template-areas:
            'photo text1'
            'text2 text2';
    }

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        max-width: 100%;
        grid-template-rows: auto auto;
        grid-template-columns: 250px auto minmax(200px, 15vw);
        grid-template-areas:
            'profile text1 photo'
            'text2 text2 photo';
    }
`;

const ProfileDrawing = styled(Profile)`
    grid-area: profile;
    display: none;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        display: block;
        width: 250px;
        height: 180px;
        align-self: start;
    }
`;

const Text = styled.p`
    text-align: justify;
`;

const FirstText = styled(Text)`
    grid-area: text1;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        margin-left: 2rem;
        margin-top: 0;
    }
`;

const SecondText = styled(Text)`
    grid-area: text2;
`;

const Image = styled(Img)`
    justify-self: center;
    grid-area: photo;
    width: 170px;
    height: 222px;
    border: 2px solid ${(props) => props.theme.colors.font};
    box-shadow: 10px 10px 0 ${(props) => props.theme.colors.primary};
    margin-right: 10px;
    margin-bottom: 10px;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        justify-self: left;
    }

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        place-self: center right;
    }
`;

const AboutMe = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "pic.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <MainWrapper>
            <SectionTitle>
                <FormattedMessage id="aboutMe.title" />
            </SectionTitle>
            <GridWrapper>
                <ProfileDrawing />
                <FirstText>
                    <FormattedMessage id="aboutMe.text1" />
                </FirstText>
                <SecondText>
                    <FormattedMessage id="aboutMe.text2" />
                </SecondText>
                <Image fluid={data.placeholderImage.childImageSharp.fluid} />
            </GridWrapper>
        </MainWrapper>
    );
};

export default AboutMe;
