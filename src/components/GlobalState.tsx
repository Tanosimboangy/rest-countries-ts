import React, {useReducer, createContext } from 'react';
const URLALL = "https://restcountries.eu/rest/v2/all";
// const [data, setData] = useState([]);

// useEffect(() => {
//     // const fetch = fetch(URLALL);
// }, [])

// function fetchingData() {
    
// }

type State = {
    rValue: boolean;
}

export const initialValue = {
    rValue: true,
    turnOn: () => {},
}


type Action = 
| {type: "one"} 

const GlobalContext = createContext(initialValue);
export default GlobalContext;

function reducer(state: State, action: Action) {
    switch(action.type) {
        case "one":
            return {rValue: true};
            default:
                return state;
    }
}

export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <GlobalContext.Provider 
            value={{
                rValue: state.rValue, 
                turnOn: () => dispatch({type: "one"})
                }}>
            {children}
        </GlobalContext.Provider>
        )
    }
