import React from 'react'
import { Input, InputLabel, MobileErrors, MoblieDiv } from '../style_component/Style'

function MobileInput({ errors, touched, values, handleChange }) {
   
    return (
        <>
            <MoblieDiv>
                <InputLabel htmlFor='number'> Enter Mobile Number </InputLabel>
                <Input
                    type='number'
                    pattern="\d*"
                    id='number'
                    name='number'
                    placeholder='Please Enter mobile Number'
                    value={values.number}
                    onChange={handleChange}
                />
                {touched.number && errors.number &&<MobileErrors color="red">{errors.number} </MobileErrors>}
            </MoblieDiv>
        </>
    )
}

export default MobileInput
