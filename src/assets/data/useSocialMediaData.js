import { useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import localiseData from '../../utils/localiseData';

const useSocialMediaData = () => {
    const { locale } = useIntl();

    const data = useStaticQuery(graphql`
        query {
            allContentfulSocialMedia(sort: { fields: createdAt, order: ASC }) {
                nodes {
                    node_locale
                    name
                    url
                    icon {
                        id
                        svg {
                            content
                        }
                        file {
                            url
                        }
                    }
                }
            }
        }
    `);

    return localiseData(data.allContentfulSocialMedia.nodes, locale);
};

export default useSocialMediaData;
