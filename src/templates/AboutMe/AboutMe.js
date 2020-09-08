import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl-contentful';
import { graphql, useStaticQuery } from 'gatsby';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FirstText, GridWrapper, Image, MainWrapper, ProfileDrawing, SecondText } from './AboutMe.styled';

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
        <MainWrapper id="aboutMe">
            <SectionTitle>
                <FormattedMessage id="aboutMe.title" />
            </SectionTitle>
            <GridWrapper>
                <ProfileDrawing aria-hidden="true" />
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
