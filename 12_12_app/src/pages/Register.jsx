import React, { useContext, useEffect, useState } from 'react'
import { Container, HeadingTag, RegisterForm, SubmitButton } from '../style_component/Style'
import Heading from '../component/Heading'
import OtpInputs from '../component/OtpInput'
import { useFormik } from 'formik'
import { toast } from 'react-toastify';
import { validOtp } from '../services/data'
import Welcome from '../component/Common'
import { MobileNum } from '../services/contextApi'

function Register() {
  const [otp, setOtp] = useState("")
  const [show, setShow] = useState(true)
  const { mobileNumber } = useContext(MobileNum)
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
      validOtp == Number(otp) ? toast.success('OTP verified') : setErrors({ otp: 'invalid Otp' });
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
            <RegisterForm onSubmit={handleSubmit}>
              <HeadingTag>Register</HeadingTag>
              <Heading setShow={setShow} />
              <OtpInputs setOtp={setOtp} errors={errors} />
              <SubmitButton type='submit'>SUBMIT</SubmitButton>
            </RegisterForm>
          </> :
          <>
            <Welcome text="Register" setShow={setShow} />
          </>
      }


    </Container >
  )
}

export default Register