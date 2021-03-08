import React from 'react';
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
    padding: 16px 0;
    margin: 0;
`;

const ModeText = styled.p`
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    padding: 16px 0;
    margin: 0;
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