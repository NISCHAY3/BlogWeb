import { createContext, useState } from "react";


export const dataContext = createContext(null);

const dataProvider = ({ children }) => {
    const [account, setAccount] = useState({ name: '', username: '' });

    return (
        <dataContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataProvider;