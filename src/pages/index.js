import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import SEO from '../components/SEO/SEO';
import App from '../App';
import Footer from '../components/molecules/Footer/Footer';
import Projects from '../components/molecules/Projects/Projects';
import Contact from '../components/molecules/Contact/Contact';
import Technologies from '../components/molecules/Technologies/Technologies';
import AboutMe from '../components/molecules/AboutMe/AboutMe';
import Landing from '../components/molecules/Landing/Landing';

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
