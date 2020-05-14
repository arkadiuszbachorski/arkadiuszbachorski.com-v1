import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../styles/theme';
import { buttonStylesWithoutShadow } from '../../styles/button';

const LinkButton = styled(Link)`
    ${buttonStylesWithoutShadow};
    box-shadow: 5px 5px 0 ${theme.colors.primaryDarker};
`;

export default LinkButton;
