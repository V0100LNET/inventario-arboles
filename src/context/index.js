import React, { createContext, useState } from 'react';


export const PrincipalContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [test, setTest] = useState(false);
    setTest("fasdfasdfasdf");

    return(
        <PrincipalContext.Provider
            value={{
                test, setTest
            }}
        >


        {children}
        </PrincipalContext.Provider>
    )
}