import React, { createContext, useState } from 'react'
import { mobileNum } from '../service/data';
export const DataContext = createContext();
function Context({ children }) {
  const [mobileNumber, setMobileNumber] = useState("")
  return (
    <DataContext.Provider value={{ mobileNumber, setMobileNumber }}>
      {children}
    </DataContext.Provider>
  )
}

export default Context
