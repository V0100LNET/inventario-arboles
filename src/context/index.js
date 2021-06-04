import { createContext, useState } from 'react';

export const PrincipalContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [dataModalAdmin, setDataModalAdmin] = useState({});
    const [modalAdmin, setModalAdmin] = useState(false);
    const [imageUpload, saveImage] = useState({image: ""});
    const [modalImages, setModalImages] = useState(false);
    const [saveImages, setSaveImages] = useState([]);
    

    return (
        <PrincipalContext.Provider
            value={{
                dataModalAdmin, setDataModalAdmin,
                modalAdmin, setModalAdmin,
                imageUpload, saveImage,
                modalImages, setModalImages,
                saveImages, setSaveImages
            }}>
            {children}
        </PrincipalContext.Provider>
    )
}