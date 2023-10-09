import React from 'react'

function CompRD({dispatch}) {
    // console.log(dispatch)
  return (
    <div>CompRD
        <button className='bg-green-400 m-1 p-2 text-white first-letter text-2xl' onClick={()=>dispatch({type1:"INCREMENT"})}>Parent Button Change State</button>
    </div>
  )
}

export default CompRD