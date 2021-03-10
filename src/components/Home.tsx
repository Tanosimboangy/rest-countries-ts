import React, {useContext} from 'react';
import GlobalContext from './GlobalState';
import {Link} from "react-router-dom";
import styled from "styled-components";
import { isTemplateExpression } from 'typescript';

const HomeBase = styled.div`
    @media(min-width: 720px) {
        max-width: 90%;
        margin: auto;
        margin-bottom: 50px;
    }
`;
const SearchInput = styled.div`
    margin-bottom: 25px;
    margin-right: 32px;
    @media(min-width: 720px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;
const InputContainer = styled.div`
    max-width: 300px;
    margin-right: auto;
    @media(min-width: 720px) {
        max-width: 230px;
        margin-right: auto;
    }
`;
const Input = styled.input`
    width: 100%;
    resize: vertical;
    outline: none;
    border: none;
    background-color: hsl(0, 0%, 100%);
    padding: 16px;
    border-radius: 4px;
    box-shadow: 1px 1px 2px #e5e5e5;
    font-style: normal;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
`;
const Container = styled.div`
    display: block;
    @media(min-width: 720px) {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;
const Wrapper = styled.div`
    max-width: 329px;
    margin: 0;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: 10px;
    @media(min-width: 720px) {
        max-width: 250px;
        margin: 0;
        margin-bottom: 30px;
    }
`;
const Flag = styled.img`
    width: 100%;
    height: auto;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;
const Card = styled.div`
    padding: 16px;
    width: 100%;
    height: auto;
    background-color: hsl(0, 0%, 100%);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`;
const CountryName = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bolder;
    font-size: 16px;
    color: hsl(209, 23%, 22%);
`;
const Population = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: hsl(209, 23%, 22%);
    padding-top: 4px;
`;

function Home() {
    const {countriesData} = useContext(GlobalContext);
    const {searchCountry} = useContext(GlobalContext);

    return (
        <HomeBase>
            <SearchInput>
                <InputContainer>
                    <Input placeholder="Search for a country ..." onChange={searchCountry} type="text"/>
                </InputContainer>
                <select>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="uerope">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </SearchInput>
            <Container>
                {countriesData.map((country: any) => {
                    const selectedCountry = country.name;
                    return (
                        <Link to={`/${selectedCountry}`}  key={country.name}>
                            <Wrapper>
                                <Flag src={country.flag} alt="country_flag"/>
                                <Card>
                                    <CountryName>{country.name}</CountryName>
                                    <Population><span>Population: </span>{country.population}</Population>
                                    <p><span>Region: </span>{country.region}</p>
                                    <p><span>Capital: </span> {country.capital}</p>
                                </Card>
                            </Wrapper>
                        </Link>)
                    })
                }
            </Container>
        </HomeBase>
    )
}
export default Home;
