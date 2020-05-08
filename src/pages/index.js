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
import Jumbotron from '../templates/Landing/Jumbotron/Jumbotron';

const Index = () => {
    const intl = useIntl();

    return (
        <App>
            <SEO
                description={intl.formatMessage({ id: 'seo.description.index' })}
                title={intl.formatMessage({ id: 'seo.title.index' })}
            />
            <Landing>
                <Jumbotron />
            </Landing>
            <AboutMe />
            <Technologies />
            <Projects />
            <Contact />
            <Footer />
        </App>
    );
};

export default Index;
