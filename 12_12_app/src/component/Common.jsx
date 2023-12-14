import React, { useContext, useState } from 'react'
import { Container, Heading, SubmitButton, WelcomeForm } from '../style_component/Style'
import MobileInput from './MobileInput'
import { Data } from '../services/contextApi';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { instialValue, number } from '../services/data';
import { LoginSchema } from '../services/validation';

function Welcome({ setShow, text }) {
  const navigate = useNavigate();
  const { setMobileNumber } = useContext(Data);
  const { values, errors, touched, handleChange, handleSubmit, setErrors } = useFormik({
    initialValues: instialValue,
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      if (number == values.number) {
        navigate('/login')
        setShow((pre) => !pre);
      } else {
        navigate('/register');
        setShow((pre) => !pre);
      }
      setMobileNumber(values.number)
    }

  });

  return (
    <Container>
      <WelcomeForm onSubmit={handleSubmit}>
        <Heading>{text}</Heading>
        <MobileInput values={values} handleChange={handleChange} errors={errors} touched={touched} />
        <SubmitButton type='submit'>NEXT</SubmitButton>
      </WelcomeForm>
    </Container>
  )
}

export default Welcome
