import React, { createContext, useState } from 'react'
import { intialUser } from './data';
export const Data = createContext();

function contextApi({ children }) {
    const [mobileNumber, setMobileNumber] = useState("")
    const[userData, setUserData] = useState(intialUser)
    return (
        <Data.Provider value={{ mobileNumber, setMobileNumber,userData, setUserData }}>
            {children}
        </Data.Provider>
    )
}

export default contextApi;
