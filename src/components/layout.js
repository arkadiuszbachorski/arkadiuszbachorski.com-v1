import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            {data.site.siteMetadata.title}
            <main>{children}</main>
        </>
    );
};

export default Layout;
