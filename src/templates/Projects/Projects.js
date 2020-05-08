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
} from './Projects.styled';

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
                            <Image fluid={project.image.fluid} />
                            <ProjectFrame />
                        </ImageWrapper>
                        <DescriptionWrapper>
                            <Name>{project.name}</Name>
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
