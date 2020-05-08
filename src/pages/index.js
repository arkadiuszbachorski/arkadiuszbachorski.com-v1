import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import SEO from '../components/SEO/SEO';
import App from '../App';
import Footer from '../templates/Footer/Footer';
import Projects from '../templates/Projects/Projects';
import Contact from '../templates/Contact/Contact';
import Technologies from '../templates/Technologies/Technologies';
import AboutMe from '../templates/AboutMe/AboutMe';
import Landing from '../templates/Landing/Landing';

const Index = () => {
    const intl = useIntl();

    return (
        <App>
            <SEO description={intl.formatMessage({ id: 'seo.description' })} />
            <Landing />
            <AboutMe />
            <Technologies />
            <Projects />
            <Contact />
            <Footer />
        </App>
    );
};

export default Index;
