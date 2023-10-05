import React, { useCallback, useState } from 'react'
import ChildCom from './ChildCom'


function Parent() {
   const [count,setCount] = useState(0);

   const abc = useCallback(()=>{

   },[])
  // function abc(){
    
  // }
  return (
    <div>Parent
      <button className='btn bg-blue-50' onClick={()=> setCount(count +1)}>Add Count:{count}</button>
    <ChildCom abc={abc} />
    </div>
  )
}

export default Parent
