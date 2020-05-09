require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: `Arkadiusz Bachorski | Fullstack Web Developer`,
        description: ``,
        author: `Arkadiusz Bachorski`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins\:200,400` // you can also specify font weights and styles
                ],
                display: 'swap'
            }
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
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/assets/intl`,
                languages: [`en`, `pl`],
                defaultLanguage: `en`,
                redirect: true,
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
    ],
};
