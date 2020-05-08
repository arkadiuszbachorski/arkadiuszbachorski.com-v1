import React from 'react';
import styled from 'styled-components';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import SEO from '../components/SEO/SEO';
import App from '../App';
import Landing from '../templates/Landing/Landing';
import theme from '../theme';
import LinkButton from '../components/LinkLikeButton/LinkButton';

const Wrapper = styled.div`
    position: absolute;
    top: 35vh;
    left: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-direction: column;
    padding-bottom: 5px;
`;

const NotFound = styled.h2`
    text-align: center;
    font-size: ${theme.font.size.xxxl};
    margin-bottom: 2rem;
`;

const Error404 = () => {
    const intl = useIntl();

    return (
        <App>
            <SEO
                description={intl.formatMessage({ id: 'seo.description.index' })}
                title={intl.formatMessage({ id: 'seo.title.404' })}
            />
            <Landing>
                <Wrapper>
                    <NotFound>
                        <FormattedMessage id="seo.title.404" />
                    </NotFound>
                    <LinkButton to="/">
                        <FormattedMessage id="404.backToMain" />
                    </LinkButton>
                </Wrapper>
            </Landing>
        </App>
    );
};

export default Error404;
