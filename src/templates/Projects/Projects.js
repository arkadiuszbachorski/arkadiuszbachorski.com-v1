import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useProjectsData from '../../assets/data/projects';
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
import Badge from '../../components/Badge';

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
                            <ProjectFrame />
                        </ImageWrapper>
                        <DescriptionWrapper>
                            <Name>{project.name}</Name>
                            <TagsWrapper>
                                {project.tags.map((tag) => (
                                    <Badge key={tag}>
                                        <FormattedMessage id={`projects.tags.${tag}`} />
                                    </Badge>
                                ))}
                            </TagsWrapper>
                            <Description>{project.description}</Description>
                            <ButtonWrapper>
                                {project.urls.visit && (
                                    <Button href={project.urls.visit} target="_blank">
                                        <FormattedMessage id="projects.button.visit" />
                                    </Button>
                                )}
                                {project.urls.repository && (
                                    <Button href={project.urls.repository} target="_blank">
                                        <FormattedMessage id="projects.button.repository" />
                                    </Button>
                                )}
                            </ButtonWrapper>
                        </DescriptionWrapper>
                    </ProjectWrapper>
                );
            })}
        </MainWrapper>
    );
};

export default Projects;
