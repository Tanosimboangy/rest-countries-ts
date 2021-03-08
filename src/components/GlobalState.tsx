import React, { useReducer, createContext } from 'react';

type State = {
    rValue: boolean;
}

export const initialValue = {
    rValue: true,
    turnOn: () => {},
    turnOff: () => {},
}


type Action = 
| {type: "one"} 
| {type: "two"} 

const GlobalContext = createContext(initialValue);
export default GlobalContext;

function reducer(state: State, action: Action) {
    switch(action.type) {
        case "one":
            return {rValue: true};
        case "two":
            return{rValue: false};
            default:
                return state;
    }
}

// Trying to give a type for the children
export const GlobalProvider: React.FC = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <GlobalContext.Provider 
            value={{
                rValue: state.rValue, 
                turnOn: () => dispatch({type: "one"}),
                turnOff: () => dispatch({type: "two"})
                }}>
            {children}
        </GlobalContext.Provider>
        )
    }
