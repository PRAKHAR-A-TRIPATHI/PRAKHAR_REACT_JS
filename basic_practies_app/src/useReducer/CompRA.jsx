import React, { useReducer, useState } from 'react'
import CompRD from './CompRD';

const reducer = (state,action) =>{
    console.log(state,action)
    // console.log(action.type)
    // if(action.type === "INCREMENT"){
    //     return state+1;
    // }
    // if(action.type === "DECREMET"){
    //     return state-1;
    // }
    switch (action.type1) {
        case "INCREMENT":
            // console.log("object")
            return state+1;
            break;
        case "DECREMET":
            return state-1;
            break;
    
        default:
            break;
    }
    return state;
}
let initialState = 0;
function CompRA() {
    // const [Count,setCount] = useState(0); 
   const[state,dispatch]= useReducer(reducer,initialState)
  return (
    <div>
        <h1 className='text-7xl'>{state}</h1>
        <button className='btn bg-green-400 text-white text-3xl m-2' onClick={()=>dispatch({type1:"INCREMENT"})}>increment</button> <br/>
        <button className='btn bg-green-400 text-white text-3xl m-2' onClick={()=>dispatch({type1:"DECREMET"})}>Dcrement </button>
        <CompRD dispatch={dispatch}/>
    </div>
  )
}

export default CompRA