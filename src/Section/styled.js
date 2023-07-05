import styled from "styled-components";

export const Segment = styled.section`
    margin: 10px 0;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px 4px #EAEAEA;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 2px solid rgb(237, 237, 237);
    padding: 20px;
    margin: 0;

    @media (max-width: 920px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Content = styled.div`
    padding: 20px;
`;
