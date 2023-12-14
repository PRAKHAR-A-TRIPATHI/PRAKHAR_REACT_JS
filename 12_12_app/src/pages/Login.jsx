import React, { useContext, useEffect, useState } from 'react'
import Welcome from '../component/Common';
import LoginComp from '../component/LoginForm';
import { Data } from '../services/contextApi';
import { number } from '../services/data';
function Login() {
  const [show, setShow] = useState(true);
  const { mobileNumber,setMobileNumber } = useContext(Data)
  
  useEffect(()=>{
    if(mobileNumber==number){
      setShow(false)
    }else{
      show && setMobileNumber("")
    }
  },[])
  return (
    <>
      {show ?
        <Welcome setShow={setShow} text="Welcome" />
        :
        <LoginComp setShow={setShow}/>}
    </>
  )
}

export default Login


