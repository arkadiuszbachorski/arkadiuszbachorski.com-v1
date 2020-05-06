import styled from 'styled-components';

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin-bottom: 4rem;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        margin-bottom: 6rem;
    }
`;

export default SectionWrapper;
