import { createContext, useState } from 'react';

export const PrincipalContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [dataModalAdmin, setDataModalAdmin] = useState({});
    const [modalAdmin, setModalAdmin] = useState(false);
    

    return (
        <PrincipalContext.Provider
            value={{
                dataModalAdmin, setDataModalAdmin,
                modalAdmin, setModalAdmin
            }}>
            {children}
        </PrincipalContext.Provider>
    )
}