import React, { useReducer } from 'react'
function reducer (state,action){
    switch(action.type){
        case"increment":
        return {count:state.count+1};
        break;
        case "decrement":
            return{count: state.count-1};
    }
}
function CompRB() {
    const [state,dispatch] = useReducer(reducer,{count:0})
  return (
    <div>REDUSER <br />
        {state.count}
        <button className='btn bg-black text-white m-2' onClick={()=>dispatch({type:"increment"})}>add</button>
        <button className='btn bg-black text-white m-2' onClick={()=>dispatch({type:"decrement"})}>Remove</button>
    </div>
  )
}

export default CompRB