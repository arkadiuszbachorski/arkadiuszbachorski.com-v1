require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        siteUrl: 'https://arkadiuszbachorski.com',
        title: `Arkadiusz Bachorski | Fullstack Web Developer`,
        description: ``,
        author: `Arkadiusz Bachorski`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins\:200,400,500`, // you can also specify font weights and styles
                ],
                display: 'swap',
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Arkadiusz Bachorski`,
                short_name: `bachorski`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-intl-contentful`,
            options: {
                defaultLanguage: `en`,
                redirect: true,
                contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
                contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: false,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-htaccess',
            options: {
                https: true,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        `gatsby-transformer-inline-svg`
    ],
};
