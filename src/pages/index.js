import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/SEO';

const H1 = styled.h1`
    color: red;
    text-align: center;
`;

const IndexPage = () => {
    const intl = useIntl();

    return (
        <Layout>
            <SEO description={intl.formatMessage({ id: 'title' })} />
            <H1>{intl.formatMessage({ id: 'title' })}</H1>
            <p>Now go build something great.</p>
            <div>
                <Image />
            </div>
        </Layout>
    );
};

export default IndexPage;
