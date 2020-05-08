import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Heading, Wrapper } from './Hi.styled';

const Hi = () => {
    return (
        <Wrapper>
            <Heading>
                <FormattedMessage id="hi" />
            </Heading>
        </Wrapper>
    );
};

export default Hi;
