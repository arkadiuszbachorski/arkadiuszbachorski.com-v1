import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

const data = [
    {
        id: 'zhonya',
        name: 'Zhonya',
        tags: {
            pl: ['PWA', 'React', 'Laravel'],
            en: ['PWA', 'React', 'Laravel'],
        },
        description: {
            pl:
                'Aplikacja zapewniająca użytkownikowi możliwość łatwego mierzenia czasu, który poświęca na wybraną czynność. Usprawnia skrupulatne zarządzanie czasem.',
            en:
                'Zhonya is an application that allows users to easily measure time which they spend on specific activity to improve their time management possibilities.',
        },
        urls: {
            visit: 'https://www.zhonya.hekko24.pl',
            repository: null,
        },
    },
    {
        id: 'xmake',
        name: 'Xmake',
        tags: {
            pl: ['Biblioteka', 'Laravel'],
            en: ['Library', 'Laravel'],
        },
        description: {
            pl:
                'Komenda Laravel Artisan xmake przyspieszająca proces tworzenia aplikacji poprzez generowanie podobnych zasobów z poziomu CLI.',
            en:
                'Additional Laravel Artisan xmake command for faster resource creating and scaffolding. Created to speed up developing process.',
        },
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
    const { locale } = useIntl();
    return data.map((project) => ({
        ...project,
        description: project.description[locale],
        tags: project.tags[locale],
        image: images.find((image) => image.fluid.src.includes(project.id)),
    }));
};

export default useProjectsData;
