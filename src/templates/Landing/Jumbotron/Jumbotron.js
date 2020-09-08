import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl-contentful';
import { Name, Passion, StyledButton, Wrapper } from './Jumbotron.styled';

const Jumbotron = () => {
    return (
        <Wrapper>
            <Name>
                <FormattedMessage id="jumbotron.presentation" /> <br />
                <span>Arkadiusz Bachorski</span>
            </Name>
            <Passion>
                <FormattedMessage id="jumbotron.passion" />
            </Passion>
            <StyledButton
                className="ui-animation"
                onClick={() => {
                    window.scroll({
                        top: document.getElementById('aboutMe').getBoundingClientRect().top,
                        behavior: 'smooth',
                    });
                }}
            >
                <FormattedMessage id="jumbotron.button" />
            </StyledButton>
        </Wrapper>
    );
};

export default Jumbotron;
