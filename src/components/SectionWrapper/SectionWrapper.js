import styled from 'styled-components';
import theme from '../../styles/theme';

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5rem 1rem 0;

    @media (${theme.mediaQuery.tablet}) {
        margin-bottom: 2rem;
    }
`;

export default SectionWrapper;
