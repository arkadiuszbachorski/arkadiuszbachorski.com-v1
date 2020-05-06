import styled from 'styled-components';

const SectionTitle = styled.h2`
    width: 100%;
    text-align: center;
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: ${(props) => props.theme.font.size.xl};
    position: relative;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        margin-bottom: 3.5rem;
    }

    &::after {
        content: '';
        position: absolute;
        width: 60px;
        height: 1px;
        background-color: ${(props) => props.theme.colors.accent};
        bottom: -0.75rem;
        left: calc(50% - 30px);
    }
`;

export default SectionTitle;
