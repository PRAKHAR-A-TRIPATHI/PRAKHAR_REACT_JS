import React from 'react'
import { Div, Input, PasswordInputDiv, Toggle } from '../style_component/Style'

function PasswordInput({togglePass,setTogglePass,handleChange,values}) {
    return (
        <PasswordInputDiv >
            <Input
                type={togglePass ? 'text' : "password"}
                name='password'
                value={values.password}
                onChange={handleChange}
                placeholder='Enter your password'
            />
            <Toggle onClick={() => setTogglePass(!togglePass)}>{togglePass ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}</Toggle>
        </PasswordInputDiv>
    )
}

export default PasswordInput
