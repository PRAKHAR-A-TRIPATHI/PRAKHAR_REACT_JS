import React, { createContext,useContext,useState } from 'react'
import ComB from './ComB'



const data = createContext();
const array = createContext();// console.log(data)
function CompA() {
    const [count, setcount] = useState(0)
    let a = ["btn1","btn2","btn3","btn4","btn5"]
    let b= "prakhar"
    const abc =()=>{
        console.log("object")
        setcount(count+1)
    } 
    return (
        <data.Provider value={{b,abc}}>
            <array.Provider value={a}>
                <div>CompA 
                    <h1 className=' text-xl'> data update:{count}</h1>
                    <ComB />
                </div>
            </array.Provider>
        </data.Provider>
    )
}

export default CompA;
export { data,array };