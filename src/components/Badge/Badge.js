import styled from 'styled-components';
import theme from '../../styles/theme';

const Badge = styled.div`
    background-color: ${theme.colors.accent};
    border-radius: 1rem;
    padding: 0.3rem 0.5rem;
    font-size: ${theme.font.size.xs};
    margin-right: 0.5rem;
`;

export default Badge;
