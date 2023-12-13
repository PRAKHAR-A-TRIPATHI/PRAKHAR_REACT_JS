import React, { useState } from 'react'
import Welcome from '../component/Common';
import LoginComp from '../component/LoginForm';
function Login() {
  const [show, setShow] = useState(true)
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


