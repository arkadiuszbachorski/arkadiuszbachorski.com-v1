import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin: 8rem 0 2rem;

    @media (${(props) => props.theme.mediaQuery.tablet}) {
        margin-top: 14rem;
    }
`;

export const IconsContainer = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
`;

export const Text = styled.span`
    text-align: center;
    width: 100%;
    margin-top: 4rem;

    span {
        color: ${(props) => props.theme.colors.primary};
    }
`;
