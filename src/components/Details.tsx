import React, {useContext} from 'react';
import { useParams} from 'react-router-dom';
import GlobalContext from './GlobalState';
import styled from "styled-components";
import {Link} from "react-router-dom";

const DetailsContainer = styled.div`
    max-width: 300px;
    margin: auto;
    @media(min-width: 720px) {
        max-width: 90%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;
const Wrapper = styled.div`
    @media(min-width: 720px) {
    }
`;
const Flag = styled.img`
    width: 100%;
    height: auto;
    @media(min-width: 720px) {
        width: 80%;
        height: auto;
    }
`;

function Details() {
    const {countriesData} = useContext(GlobalContext);
    const {selectedCountry} = useParams();
    const country = countriesData.filter(item => item.name === selectedCountry)
    console.log(country);
    
    return (
        <DetailsContainer>
            <Link to="/">Go Back</Link>
            {
                country.map((item: any)=> {
                    console.log(item.borders);
                    
                    return (
                        <Wrapper key={item.name}>
                            <Flag src={item.flag} alt="flag"/>
                            <div>
                                <h3>{item.name}</h3>
                                <div>
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
                                            <p key={currencie.iso639_1}><span>Currencies: </span>{currencie.code}</p>
                                        )}
                                        <div><span>Languages: </span>
                                            {item.languages.map((language: any) => 
                                                <p key={language.iso639_1}>{language.name}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span>Border Countries: </span>
                                    {item.borders.map((border: any) => 
                                        <Link to={`/${border}`} key={border[0]}>{border}</Link>
                                    )}
                                </div>
                            </div>
                        </Wrapper>
                    )
                })
            }
        </DetailsContainer>
    )
}
export default Details;