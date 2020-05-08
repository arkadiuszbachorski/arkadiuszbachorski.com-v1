import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Passion from './Passion/Passion';
import { Name, StyledButton, Wrapper } from './Jumbotron.styled';

const Jumbotron = () => {
    return (
        <Wrapper>
            <Name>
                <FormattedMessage id="jumbotron.presentation" /> <br />
                <span>Arkadiusz Bachorski</span>
            </Name>
            <Passion />
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
