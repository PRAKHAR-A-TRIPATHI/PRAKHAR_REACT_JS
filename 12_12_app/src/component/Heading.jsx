import React, { useContext } from 'react'
import { Data } from '../services/contextApi'
import { Changebutton, FlexDiv,  Mobilespan, Text } from '../style_component/Style'

function Heading({setShow }) {
    const { mobileNumber } = useContext(Data);
    return (
        <>
            <FlexDiv>
                <Mobilespan>
                    <Text>Mobile Number</Text>
                    <Text color='gray'>{mobileNumber && mobileNumber}</Text>
                </Mobilespan>
                <Changebutton color="blue" onClick={() =>setShow((pre)=>!pre)}>Change</Changebutton>
            </FlexDiv>
        </>
    )
}

export default Heading
