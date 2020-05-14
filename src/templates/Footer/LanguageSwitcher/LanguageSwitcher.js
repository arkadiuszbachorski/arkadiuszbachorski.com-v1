import { Link, Wrapper } from './LanguageSwitcher.styled';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const LanguageSwitcher = () => {
    const {
        site: {
            siteMetadata: { languages },
        },
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        languages
                    }
                }
            }
        `,
    );

    return (
        <Wrapper>
            {languages.map((language) => (
                <Link key={language} to={`/${language}`}>
                    {language.toUpperCase()}
                </Link>
            ))}
        </Wrapper>
    );
};

export default LanguageSwitcher;
