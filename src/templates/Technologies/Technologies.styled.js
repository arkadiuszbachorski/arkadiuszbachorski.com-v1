import styled from 'styled-components';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import reactUndraw from '../../assets/images/undraw/react.svg';
import theme from '../../theme';

export const MainWrapper = styled(SectionWrapper)`
    display: flex;
    max-width: 1050px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center;

    @media (${theme.mediaQuery.desktop}) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

export const UndrawWrapper = styled.div`
    background-image: url(${reactUndraw});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    order: 2;
    width: 300px;
    height: 200px;

    @media (${theme.mediaQuery.desktop}) {
        order: 3;
        width: 400px;
        height: 250px;
    }
`;

export const Description = styled.p`
    max-width: 700px;
    text-align: justify;

    order: 3;

    @media (${theme.mediaQuery.desktop}) {
        width: 500px;
        margin-top: 0;
        order: 2;
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    margin-top: 2rem;
    max-width: 700px;
    order: 4;
    display: flex;
    justify-content: center;

    @media (${theme.mediaQuery.desktop}) {
        justify-content: flex-start;
    }
`;
