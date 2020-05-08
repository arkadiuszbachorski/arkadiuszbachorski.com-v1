import styled from 'styled-components';
import Img from 'gatsby-image';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import ProjectFrameSVG from '../../assets/images/undraw/project-frame.inline.svg';

export const MainWrapper = styled(SectionWrapper)`
    display: flex;
    max-width: 1100px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const ProjectWrapper = styled.article`
    display: flex;
    margin: 4rem 0;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        flex-direction: row;
    }

    &:first-of-type {
        margin-top: 0;
    }

    &:not(:last-child) {
        &::after {
            content: '';
            position: absolute;
            width: 300px;
            left: calc(50% - 150px);
            bottom: -4rem;
            border-top: 1px solid ${(props) => props.theme.colors.accent};
        }
    }
`;

export const DescriptionWrapper = styled.div`
    @media (${(props) => props.theme.mediaQuery.desktop}) {
        margin-left: 4rem;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    max-width: 400px;
    width: 100%;
    margin-bottom: 2rem;
    position: relative;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        margin-bottom: 0;
    }
`;

export const Image = styled(Img)`
    width: 100%;
    position: relative;
    overflow: visible !important;
    box-shadow: 5px 5px 0 ${(props) => props.theme.colors.primary};

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        position: absolute !important;
        width: 322px;
        height: 179px;
        top: 17px;
        left: 38px;
        overflow: hidden !important;
        box-shadow: none;
    }
`;

export const ProjectFrame = styled(ProjectFrameSVG)`
    display: none;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        display: block;
    }
`;

export const Name = styled.h3`
    font-size: ${(props) => props.theme.font.size.l};
    text-align: center;
    margin-top: 0;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        text-align: left;
    }
`;

export const Description = styled.p`
    text-align: justify;
    color: ${(props) => props.theme.colors.muted};
    max-width: 700px;
    margin: 2rem 0;

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        max-width: none;
    }
`;

export const ButtonWrapper = styled.nav`
    display: grid;
    justify-content: center;
    grid-gap: 1rem;
    flex-direction: column;

    > *:not(:last-child) {
        margin-right: 1rem;
    }

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        justify-content: center;
        align-items: center;
        grid-template-columns: auto auto;
    }

    @media (${(props) => props.theme.mediaQuery.desktop}) {
        justify-content: start;
    }
`;
