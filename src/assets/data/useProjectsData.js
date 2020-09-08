import { graphql, useStaticQuery } from 'gatsby';
import localiseData from '../../utils/localiseData';
import { useIntl } from 'gatsby-plugin-intl-contentful';

const useProjectsData = () => {
    const { locale } = useIntl();

    const data = useStaticQuery(graphql`
        query {
            allContentfulProject {
                nodes {
                    id
                    node_locale
                    name
                    description
                    urls {
                        id
                        name
                        url
                    }
                    image {
                        description
                        fluid(maxWidth: 800) {
                            srcSet
                        }
                    }
                    technologies {
                        id
                        name
                    }
                }
            }
        }
    `);

    return localiseData(data.allContentfulProject.nodes, locale);
};

export default useProjectsData;
