import styled from 'styled-components';
import backgroundImage from '../../../assets/images/accent.svg';

const SectionTitle = styled.h2`
    width: 100%;
    text-align: center;
    font-weight: 400;
    margin-bottom: 4rem;
    font-size: ${(props) => props.theme.font.size.xl};

    &::before,
    &::after {
        content: url(${backgroundImage});
    }

    &::before {
        margin-right: 2rem;
    }

    &::after {
        margin-left: 2rem;
    }
`;

export default SectionTitle;
