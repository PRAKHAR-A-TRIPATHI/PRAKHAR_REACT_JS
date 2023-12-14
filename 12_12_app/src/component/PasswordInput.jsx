import React from 'react'
import { Errors, FlexDiv, Input, InputLabel, PasswordInputDiv, Toggle } from '../style_component/Style'

function PasswordInput({ togglePass, setTogglePass, handleChange, values, errors, touched }) {
    return (
        <>
            <FlexDiv>
                <InputLabel>Password:</InputLabel> 
            </FlexDiv>
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
            {errors.password && touched.password && <Errors>{errors.password}</Errors>}
        </>
    )
}

export default PasswordInput
