import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import SEO from '../components/SEO/SEO';
import App from '../App';
import Footer from '../components/molecules/Footer/Footer';

const Index = () => {
    const intl = useIntl();

    return (
        <App>
            <SEO description={intl.formatMessage({ id: 'seo.description' })} />
            <Footer />
        </App>
    );
};

export default Index;
