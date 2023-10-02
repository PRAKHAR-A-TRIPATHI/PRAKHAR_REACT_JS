import React, { createContext } from 'react'
import ComB from './ComB'


const data = createContext();
// console.log(data)
function CompA() {
    return (
        <data.Provider value={"prakhar"}>
            <div>CompA
                <ComB />
            </div>
        </data.Provider>
    )
}

export default CompA;
export {data};