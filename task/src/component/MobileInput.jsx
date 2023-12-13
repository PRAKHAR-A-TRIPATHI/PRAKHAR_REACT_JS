import React from 'react'
import { Div, Input, Label, P } from '../style_component/Style'

function MobileInput({ handleChange, value,errors,touched }) {

    return (
        <>
            <Div>
                <Label>Enter Mobile Number</Label>
            </Div>
            <Div>
                <Input
                    type='text'
                    name='number'
                    placeholder='Please Enter mobile Number'
                    value={value}
                    onChange={handleChange}
                />

            </Div>
            <Div>
                {errors.number && touched.number ? <P color="red">{errors.number}</P> : null}
            </Div>
        </>
    )
}

export default MobileInput
