import { graphql, useStaticQuery } from 'gatsby';
import localiseData from '../../utils/localiseData';
import { useIntl } from 'gatsby-plugin-intl';

const useAvailableLocalesData = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject {
                nodes {
                    node_locale
                }
            }
        }
    `);

    return data.allContentfulProject.nodes.reduce((acc, { node_locale }) => {
        if (!acc.includes(node_locale)) return [...acc, node_locale];
        return acc;
    }, []);
};

export default useAvailableLocalesData;
