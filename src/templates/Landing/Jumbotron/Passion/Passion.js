import React, { useMemo } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import useTypewriter from '../../../../hooks/useTypewriter';
import animationsDelay from '../../../../animationsDelay';
import { PassionText } from './Passion.styled';

const Passion = () => {
    const intl = useIntl();
    const passionString = useMemo(() => intl.formatMessage({ id: 'jumbotron.passion' }), [intl]);
    const typewriter = useTypewriter(passionString, 1500 / passionString.length, animationsDelay.passion * 1000);

    return <PassionText className={typewriter.isTyping ? 'is-typing' : ''}>{typewriter.content}</PassionText>;
};

export default Passion;
