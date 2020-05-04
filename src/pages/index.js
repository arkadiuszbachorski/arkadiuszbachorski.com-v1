import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import SEO from '../components/SEO/SEO';
import App from '../App';
import Footer from '../components/molecules/Footer/Footer';
import Projects from '../components/molecules/Projects/Projects';

const Index = () => {
    const intl = useIntl();

    return (
        <App>
            <SEO description={intl.formatMessage({ id: 'seo.description' })} />
            <Projects />
            <Footer />
        </App>
    );
};

export default Index;
