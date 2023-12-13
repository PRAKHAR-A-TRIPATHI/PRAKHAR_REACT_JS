import React from 'react'
import { Changebutton, FlexDiv, HeadingTag, MobileDiv, Text } from '../style_component/Style'

function Heading({ mobileNumber, Heading,navigate }) {
  return (
    <>
      <FlexDiv>
        <HeadingTag>{Heading}</HeadingTag>
      </FlexDiv>
      <FlexDiv>
        <MobileDiv>
          <Text>Mobile Number</Text>
          <Text color='gray'>{mobileNumber && mobileNumber}</Text>
        </MobileDiv>
        <Changebutton color="blue" onClick={() => navigate("/")}>Change</Changebutton>
      </FlexDiv>
    </>
  )
}

export default Heading
