import styled from 'styled-components';

const Badge = styled.div`
    background-color: ${(props) => props.theme.colors.accent};
    border-radius: 1rem;
    padding: 0.3rem 0.5rem;
    font-size: ${(props) => props.theme.font.size.xs};
    margin-right: 0.5rem;
`;

export default Badge;
