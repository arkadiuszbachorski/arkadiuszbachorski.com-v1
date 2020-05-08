import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

const data = [
    {
        id: 'zhonya',
        name: 'Zhonya',
        tags: ['pwa', 'react', 'laravel'],
        urls: {
            visit: 'https://www.zhonya.hekko24.pl',
            repository: null,
        },
    },
    {
        id: 'xmake',
        name: 'Xmake',
        tags: ['library', 'laravel'],
        urls: {
            visit: null,
            repository: 'https://github.com/arkadiuszbachorski/laravel-xmake',
        },
    },
];

const useProjectImages = () => {
    const imageData = useStaticQuery(graphql`
        query {
            allFile(filter: { absolutePath: { regex: "/projects/" } }) {
                edges {
                    node {
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid_noBase64
                            }
                        }
                    }
                }
            }
        }
    `);

    return imageData.allFile.edges.map((edge) => edge.node.childImageSharp);
};

const useProjectsData = () => {
    const images = useProjectImages();
    const intl = useIntl();
    return data.map((project) => ({
        ...project,
        description: intl.formatMessage({ id: `projects.${project.id}.description` }),
        image: images.find((image) => image.fluid.src.includes(project.id)),
    }));
};

export default useProjectsData;
