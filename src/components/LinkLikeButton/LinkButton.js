import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../theme';
import { buttonStyles } from '../Button/Button';

const LinkButton = styled(Link)`
    ${buttonStyles};
    box-shadow: 5px 5px 0 ${theme.colors.primaryDarker};
`;

export default LinkButton;
