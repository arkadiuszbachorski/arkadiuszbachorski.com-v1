import { Link, Wrapper } from './LanguageSwitcher.styled';
import React from 'react';
import useAvailableLocalesData from '../../../assets/data/useAvailableLocalesData';

const LanguageSwitcher = () => {
    const languages = useAvailableLocalesData();

    return (
        <Wrapper>
            {languages.map((language) => (
                <Link key={language} language={language}>
                    {language.toUpperCase()}
                </Link>
            ))}
        </Wrapper>
    );
};

export default LanguageSwitcher;
