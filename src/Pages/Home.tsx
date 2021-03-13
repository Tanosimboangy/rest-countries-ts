import React, {useContext} from 'react';
import GlobalContext from '../Context/GlobalState';
import {Link} from "react-router-dom";
import styled from "styled-components";
import { isTemplateExpression } from 'typescript';

const HomeBase = styled.div`
    @media(min-width: 720px) {
        max-width: 85%;
        margin: auto;
        margin-bottom: 50px;
    }
`;
const SearchCountry = styled.div`
    margin-bottom: 25px;
    margin-right: 32px;
    @media(min-width: 720px) {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-right: 0;
    }
`;
const InputContainer = styled.div`
    max-width: 250px;
    margin-right: auto;
    margin-bottom: 25px;
    @media(min-width: 720px) {
        max-width: 500px;
        margin-right: 0;
        margin-bottom: 25px;
    }
`;
const Input = styled.input`
    width: 100%;
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
    @media(min-width: 720px) {
        margin-bottom: 0;
    }
    &:hover {
        box-shadow: 1px 1px 4px #c5c4c4;
    }
`;
const Select = styled.select`
    width: 150px;
    resize: vertical;
    outline: none;
    border: none;
    background-color: hsl(0, 0%, 100%);
    padding: 16px;
    border-radius: 4px;
    font-style: normal;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    @media(max-width: 340px) {
        width: 100%;
    }
    &:hover {
        box-shadow: 1px 1px 6px #c5c4c4;
    }
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
const Loading = styled.h1`
    color: blue;
    font-size: 45px;
    line-height: 55px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
`;
const Wrapper = styled.div`
    max-width: 280px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: 10px;
    margin-bottom: 40px;
    @media(min-width: 720px) {
        max-width: 240px;
        margin: 0;
        margin-bottom: 30px;
    }
    &:hover {
        border-radius: 4px;
        transform: translateY(-6px);
        box-shadow: rgb(0 0 0 / 5%) 0px 0px 0.7rem 0.2rem;
        transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
    }
`;
const Flag = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;
const Card = styled.div`
    padding: 0 20px;
    width: 100%;
    height: auto;
    background-color: hsl(0, 0%, 100%);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding-bottom: 20px;
    span {
        font-weight: bolder;
        color: black;
    }
`;
const CountryName = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bolder;
    font-size: 16px;
    color: hsl(209, 23%, 22%);
    padding-bottom: 20px;
    padding-top: 20px;
`;
const Population = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: hsl(209, 23%, 22%);
    padding-bottom: 10px;
`;
const Region = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: hsl(209, 23%, 22%);
    padding-bottom: 10px;
`;
const Capital = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: hsl(209, 23%, 22%);
    padding-bottom: 10px;
`;

function Home() {
    const {countriesData} = useContext(GlobalContext);
    const {searchCountry} = useContext(GlobalContext);
    const {inputValue} = useContext(GlobalContext);
    const {selectedRegion} = useContext(GlobalContext);
    const {selectValue} = useContext(GlobalContext);
    // const filteredCountries = inputValue !== "" ? countriesData.filter((item: any) => item.name.toLowerCase().includes(inputValue.toLowerCase())) : selectValue !== "" ? countriesData.filter((items: any) => items.region === selectValue) : inputValue !=="" && selectValue !=="" ? countriesData.filter((item: any) => item.name.toLowerCase().includes(inputValue.toLowerCase())).countriesData.filter((items: any) => items.region === selectValue) : countriesData;

    const filteredCountriesByName = countriesData.filter((item: any) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
    // const filteredCountriesByRegion = filteredCountriesByName(selectValue !== "" ? countriesData.filter((items: any) => items.region === selectValue) : );
    // console.log(filteredCountriesByName, filteredCountriesByRegion)

    return (
        <HomeBase>
            <SearchCountry>
                <InputContainer>
                    <Input placeholder="Search for a country ..." value={inputValue} onChange={searchCountry} type="text"/>
                </InputContainer>
                <Select  value={selectValue} onChange={selectedRegion}>
                    <option value="">Filter by regions</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </Select>
            </SearchCountry>
            <Container>
                {countriesData.length === 0? <Loading>Loading ...</Loading> :
                 
                 filteredCountriesByName.map((country: any) => {
                    const selectedCountry = country.name;
                    return (
                        <Link to={`/${selectedCountry}`}  key={country.name}>
                            <Wrapper>
                                <Flag src={country.flag} alt="country_flag"/>
                                <Card>
                                    <CountryName>{country.name}</CountryName>
                                    <Population><span>Population: </span>{country.population}</Population>
                                    <Region><span>Region: </span>{country.region}</Region>
                                    <Capital><span>Capital: </span> {country.capital}</Capital>
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

{/* {countriesData.length === 0? <Loading>Loading ...</Loading> :
countriesData.filter((item: any) => item.region === inputValue).map((country: any) => {
    const selectedCountry = country.name;
    return (
        <Link to={`/${selectedCountry}`}  key={country.name}>
            <Wrapper>
                <Flag src={country.flag} alt="country_flag"/>
                <Card>
                    <CountryName>{selectedCountry}</CountryName>
                    <Population><span>Population: </span>{country.population}</Population>
                    <Region><span>Region: </span>{country.region}</Region>
                    <Capital><span>Capital: </span> {country.capital}</Capital>
                </Card>
            </Wrapper>
        </Link>)
    })
} */}