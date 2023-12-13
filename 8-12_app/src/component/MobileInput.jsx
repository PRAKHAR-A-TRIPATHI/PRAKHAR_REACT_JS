import React from 'react'
import { FlexDiv, Input, Label, Text } from '../style_component/Style'

function MobileInput({ handleChange, value,errors,touched }) {

    return (
        <>
            <FlexDiv>
                <Label>Enter Mobile Number</Label>
            </FlexDiv>
            <FlexDiv>
                <Input
                    type='text'
                    name='number'
                    placeholder='Please Enter mobile Number'
                    value={value}
                    onChange={handleChange}
                />

            </FlexDiv>
            <FlexDiv>
                {errors.number && touched.number ? <Text color="red">{errors.number}</Text> : null}
            </FlexDiv>
        </>
    )
}

export default MobileInput
