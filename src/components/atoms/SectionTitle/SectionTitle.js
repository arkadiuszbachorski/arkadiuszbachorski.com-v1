import styled from 'styled-components';

const SectionTitle = styled.h2`
    width: 100%;
    text-align: center;
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: ${(props) => props.theme.font.size.xl};

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        margin-bottom: 3.5rem;
    }
`;

export default SectionTitle;
