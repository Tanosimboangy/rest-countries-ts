import React, {useContext} from 'react';
import GlobalContext from './GlobalState';

function Home() {
    const {countriesData} = useContext(GlobalContext);
    console.log(countriesData);
    
    return (
        <>
            {
                countriesData.map((coutry: any) => {
                    return (
                        <div>{coutry.name}</div>
                    )
                })
            }
        </>
    )
}
export default Home;
