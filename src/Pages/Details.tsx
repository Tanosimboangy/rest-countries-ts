import React, {useContext} from 'react';
import { useParams} from 'react-router-dom';
import GlobalContext from '../Context/GlobalState';
import styled from "styled-components";
import {Link} from "react-router-dom";

const DetailsContainer = styled.div`
    display: block;
    @media(min-width: 720px) {
        max-width: 85%;
        margin: auto;
    }
`;
const Wrapper = styled.div`
    display: grid;
    @media(min-width: 950px) {
        max-width: 100%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10%;
    }
`;
const Flag = styled.div`
    max-width: 500px;
    margin: auto;
    @media(max-width: 720px) {
        max-width: 600pxpx;
        margin: auto;
    }
    `;
const Image = styled.img`
    border-radius: 8px;
    width: 100%;
    @media(min-width: 720px) {}
`;
const GoBack = styled.div`  
    display: inline-block;
    background-color: white;
    box-shadow: 0px 0px 4px gray;
    margin-bottom: 40px;
    border-radius: 4px;
    a {
        display: block;
        padding: 6px 16px;
        color: hsl(209, 23%, 22%);
        font-size: 16px;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        span {
            font-weight: bolder;
            font-size: 20px;
        }
    }
`;
const Base = styled.div`
    padding-top: 20px;
    div {
        span {
            font-size: 16px;
            font-weight: 600;
            font-style: normal;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
    div, p {
        white-space: nowrap;
    }
     @media(min-width: 720px) {}
`;
const Name = styled.h3`  
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    padding-bottom: 20px;
`;
const SubContainer = styled.div`  
    @media(min-width: 720px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;


function Details() {
    const {countriesData} = useContext(GlobalContext);
    const {selectedCountry} = useParams();
    const country = countriesData.filter(item => item.name === selectedCountry)
    
    return (
        <DetailsContainer>
            <GoBack>
                <Link to="/"><span>←</span> Back</Link>
            </GoBack>
            {
                country.map((item: any)=> {
                    return (
                        <Wrapper key={item.name}>
                            <Flag>
                                <Image src={item.flag} alt="flag"/>
                            </Flag>
                            <Base>
                                <Name>{item.name}</Name>
                                <SubContainer>
                                    <div>
                                        <p><span>Native Name: </span>{item.nativeName}</p>
                                        <p><span>Population: </span>{item.population}</p>
                                        <p><span>Region: </span>{item.region}</p>
                                        <p><span>Sub Region: </span>{item.subregion}</p>
                                        <p><span>Capital: </span>{item.capital}</p>
                                    </div>
                                    <div>
                                        <p><span>Top Level Domain: </span>{item.topLevelDomain}</p>
                                        {item.currencies.map((currencie: any) => 
                                            <p key={currencie.code}><span>Currencies: </span>{currencie.code}</p>
                                        )}
                                        <div><span>Languages: </span>
                                            {item.languages.map((language: any) => 
                                                <p key={language.name}>{language.name}</p>
                                            )}
                                        </div>
                                    </div>
                                </SubContainer>
                                <div>
                                    <span>Border Countries: </span>
                                    {/* {item.borders.map((border: any) => {
                                        return (
                                            countriesData.filter((singleCountry: any) => singleCountry.alpha3Code === border).map((item: any) => {
                                                return (
                                                    <Link to={`/${item.name}`} key={Date.now()}>{item.name}</Link>
                                                )
                                            })
                                        )
                                    })} */}
                                </div>
                            </Base>
                        </Wrapper>
                    )
                })
            }
        </DetailsContainer>
    )
}
export default Details;