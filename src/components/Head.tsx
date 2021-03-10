import React from 'react';
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 25px;
    @media(min-width: 720px) {
        max-width: 90%;
        margin: auto;
        margin-bottom: 25px;
        padding-top: 20px; 
    }
`;
const Title = styled.h1`
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    white-space: nowrap;
    padding: 16px 0;
    padding-top: 0;
    margin: 0;
    @media(min-width: 720px) {
        font-size: 20px;
    }
`;
const ModeText = styled.p`
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    white-space: nowrap;
    padding: 16px 0;
    padding-top: 0;
    margin: 0;
    @media(min-width: 720px) {
        font-size: 16px;
    }
`;
type Props = {
    title: string;
}

const Head = ({title = "Hello"}: Props) => {
    return (
        <Header>
            <Title>{title}</Title>
            <ModeText>Dark Mode</ModeText>
        </Header>
    )
}
export default Head;