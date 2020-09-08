import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl-contentful';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import {
    ButtonWrapper,
    Description,
    DescriptionWrapper,
    Image,
    ImageWrapper,
    MainWrapper,
    Name,
    ProjectFrame,
    ProjectWrapper,
    TagsWrapper,
} from './Projects.styled';
import Badge from '../../components/Badge/Badge';
import useProjectsData from '../../assets/data/useProjectsData';

const Projects = () => {
    const projects = useProjectsData();
    return (
        <MainWrapper id="projects">
            <SectionTitle>
                <FormattedMessage id="projects.title" />
            </SectionTitle>
            {projects.map((project) => {
                return (
                    <ProjectWrapper key={project.id}>
                        <ImageWrapper>
                            <Image alt={`${project.name} project image`} fluid={project.image.fluid} />
                            <ProjectFrame aria-hidden="true" />
                        </ImageWrapper>
                        <DescriptionWrapper>
                            <Name>{project.name}</Name>
                            <TagsWrapper>
                                {project.technologies.map((technology) => (
                                    <Badge key={technology.id}>{technology.name}</Badge>
                                ))}
                            </TagsWrapper>
                            <Description>{project.description}</Description>
                            <ButtonWrapper>
                                {project.urls.map((url) => (
                                    <Button href={url.url} target="_blank">
                                        {url.name}
                                    </Button>
                                ))}
                            </ButtonWrapper>
                        </DescriptionWrapper>
                    </ProjectWrapper>
                );
            })}
        </MainWrapper>
    );
};

export default Projects;
