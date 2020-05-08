import styled from 'styled-components';

export const TechnologiesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const TechnologyGroupWrapper = styled.section`
    width: 230px;
    margin: 1rem;
`;

export const TechnologyGroupTitle = styled.h4`
    font-weight: bold;
`;

export const TechnologyGroupList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const TechnologyGroupListItem = styled.li`
    margin: 0.5rem 0;
    &::before {
        content: '';
        display: inline-block;
        background: ${(props) => props.theme.colors.primary};
        width: 0.5rem;
        height: 0.5rem;
        position: relative;
        bottom: 1px;
        margin-right: 0.5rem;
    }
`;
