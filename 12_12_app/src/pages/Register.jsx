import React, { useContext, useEffect, useState } from 'react'
import { Container, HeadingTag, RegisterDiv, RegisterForm, SubmitButton } from '../style_component/Style'
import Heading from '../component/Heading'
import OtpInputs from '../component/OtpInput'
import { useFormik } from 'formik'
import {useNavigate} from 'react-router-dom'
import { validOtp } from '../services/data'
import Welcome from '../component/Common'
import { Data } from '../services/contextApi'

function Register() {
  const [otp, setOtp] = useState("")
  const [show, setShow] = useState(true)
  const { mobileNumber,setMobileNumber } = useContext(Data)
  const navigate = useNavigate()
  const validate = values => {
    const errors = {};
    if (!otp) {
      errors.otp = 'Required';
    } else if (otp.length != 6) {
      errors.otp = '6 length required';
    }
    return errors;
  };
  const { values, errors, touched, handleChange, handleSubmit, setErrors, setValues } = useFormik({
    initialValues: { otp: "" },
    validate,
    onSubmit: () => {
      validOtp == Number(otp) ?navigate('/user') : setErrors({ otp: 'invalid Otp' });
    },
  });
  useEffect(() => {
    if (!mobileNumber) {
      setShow(false)
    }
  }, [mobileNumber])
  return (
    <Container>
      {
        show ?
          <>
            <RegisterDiv>
              <HeadingTag>Register</HeadingTag>
              <Heading setShow={setShow} />
              <RegisterForm onSubmit={handleSubmit}>
                <OtpInputs setOtp={setOtp} errors={errors} />
                <SubmitButton type='submit'>SUBMIT</SubmitButton>
              </RegisterForm>
            </RegisterDiv>
          </> :
          <>
            <Welcome text="Register" setShow={setShow} />
          </>
      }


    </Container >
  )
}

export default Register