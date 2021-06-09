import { createContext, useState } from 'react';

export const PrincipalContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [imageUpload, saveImage] = useState({image: ""});
    const [dataModalAdmin, setDataModalAdmin] = useState({});
    const [dataModalEditInfoTree, setDataModalEditInfoTree] = useState([null]);
    
    const [modalAdmin, setModalAdmin] = useState(false);
    const [modalImages, setModalImages] = useState(false);
    const [modalEditInfoTree, setModalInfoTree] = useState(false);
    
    const [saveImages, setSaveImages] = useState([]);
    

    return (
        <PrincipalContext.Provider
            value={{
                dataModalAdmin, setDataModalAdmin,
                modalAdmin, setModalAdmin,
                imageUpload, saveImage,
                modalImages, setModalImages,
                saveImages, setSaveImages,
                modalEditInfoTree, setModalInfoTree,
                dataModalEditInfoTree, setDataModalEditInfoTree,
            }}>
            {children}
        </PrincipalContext.Provider>
    )
}