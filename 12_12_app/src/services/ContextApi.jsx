import React, { createContext, useState } from 'react'
export const MobileNum = createContext();

function contextApi({ children }) {
    const [mobileNumber, setMobileNumber] = useState("")
    return (
        <MobileNum.Provider value={{ mobileNumber, setMobileNumber }}>
            {children}
        </MobileNum.Provider>
    )
}

export default contextApi;
