import styled from 'styled-components';

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5rem 1rem 0;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        margin-bottom: 2rem;
    }
`;

export default SectionWrapper;
