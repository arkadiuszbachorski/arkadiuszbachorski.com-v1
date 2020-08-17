import { useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import localiseData from '../../utils/localiseData';

const useTechnologyGroupData = () => {
    const { locale } = useIntl();

    const data = useStaticQuery(graphql`
        query {
            allContentfulTechnologyGroup {
                nodes {
                    id
                    node_locale
                    name
                    technologies {
                        id
                        name
                    }
                }
            }
        }
    `);

    return localiseData(data.allContentfulTechnologyGroup.nodes, locale);
};

export default useTechnologyGroupData;
